# `greengrassv2ComponentVersion` Submodule <a name="`greengrassv2ComponentVersion` Submodule" id="@cdktn/provider-awscc.greengrassv2ComponentVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Greengrassv2ComponentVersion <a name="Greengrassv2ComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version awscc_greengrassv2_component_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersion(Construct Scope, string Id, Greengrassv2ComponentVersionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig">Greengrassv2ComponentVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig">Greengrassv2ComponentVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction">PutLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetInlineRecipe">ResetInlineRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetLambdaFunction">ResetLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLambdaFunction` <a name="PutLambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction"></a>

```csharp
private void PutLambdaFunction(Greengrassv2ComponentVersionLambdaFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---

##### `ResetInlineRecipe` <a name="ResetInlineRecipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetInlineRecipe"></a>

```csharp
private void ResetInlineRecipe()
```

##### `ResetLambdaFunction` <a name="ResetLambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetLambdaFunction"></a>

```csharp
private void ResetLambdaFunction()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Greengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2ComponentVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2ComponentVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2ComponentVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Greengrassv2ComponentVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Greengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Greengrassv2ComponentVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Greengrassv2ComponentVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Greengrassv2ComponentVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentName">ComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentVersion">ComponentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunction">LambdaFunction</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference">Greengrassv2ComponentVersionLambdaFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipeInput">InlineRecipeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunctionInput">LambdaFunctionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipe">InlineRecipe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentName"></a>

```csharp
public string ComponentName { get; }
```

- *Type:* string

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentVersion"></a>

```csharp
public string ComponentVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LambdaFunction`<sup>Required</sup> <a name="LambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunction"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionOutputReference LambdaFunction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference">Greengrassv2ComponentVersionLambdaFunctionOutputReference</a>

---

##### `InlineRecipeInput`<sup>Optional</sup> <a name="InlineRecipeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipeInput"></a>

```csharp
public string InlineRecipeInput { get; }
```

- *Type:* string

---

##### `LambdaFunctionInput`<sup>Optional</sup> <a name="LambdaFunctionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunctionInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunction LambdaFunctionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InlineRecipe`<sup>Required</sup> <a name="InlineRecipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipe"></a>

```csharp
public string InlineRecipe { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Greengrassv2ComponentVersionConfig <a name="Greengrassv2ComponentVersionConfig" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InlineRecipe = null,
    Greengrassv2ComponentVersionLambdaFunction LambdaFunction = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.inlineRecipe">InlineRecipe</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lambdaFunction">LambdaFunction</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InlineRecipe`<sup>Optional</sup> <a name="InlineRecipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.inlineRecipe"></a>

```csharp
public string InlineRecipe { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}.

---

##### `LambdaFunction`<sup>Optional</sup> <a name="LambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lambdaFunction"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunction LambdaFunction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}.

---

### Greengrassv2ComponentVersionLambdaFunction <a name="Greengrassv2ComponentVersionLambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunction {
    IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> ComponentDependencies = null,
    Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters ComponentLambdaParameters = null,
    string ComponentName = null,
    IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms[] ComponentPlatforms = null,
    string ComponentVersion = null,
    string LambdaArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentDependencies">ComponentDependencies</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_dependencies Greengrassv2ComponentVersion#component_dependencies}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentLambdaParameters">ComponentLambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentName">ComponentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_name Greengrassv2ComponentVersion#component_name}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentPlatforms">ComponentPlatforms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_platforms Greengrassv2ComponentVersion#component_platforms}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentVersion">ComponentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_version Greengrassv2ComponentVersion#component_version}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_arn Greengrassv2ComponentVersion#lambda_arn}. |

---

##### `ComponentDependencies`<sup>Optional</sup> <a name="ComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentDependencies"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> ComponentDependencies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_dependencies Greengrassv2ComponentVersion#component_dependencies}.

---

##### `ComponentLambdaParameters`<sup>Optional</sup> <a name="ComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentLambdaParameters"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters ComponentLambdaParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}.

---

##### `ComponentName`<sup>Optional</sup> <a name="ComponentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentName"></a>

```csharp
public string ComponentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_name Greengrassv2ComponentVersion#component_name}.

---

##### `ComponentPlatforms`<sup>Optional</sup> <a name="ComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentPlatforms"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms[] ComponentPlatforms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_platforms Greengrassv2ComponentVersion#component_platforms}.

---

##### `ComponentVersion`<sup>Optional</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentVersion"></a>

```csharp
public string ComponentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_version Greengrassv2ComponentVersion#component_version}.

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_arn Greengrassv2ComponentVersion#lambda_arn}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentDependencies <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentDependencies {
    string DependencyType = null,
    string VersionRequirement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.dependencyType">DependencyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#dependency_type Greengrassv2ComponentVersion#dependency_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.versionRequirement">VersionRequirement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#version_requirement Greengrassv2ComponentVersion#version_requirement}. |

---

##### `DependencyType`<sup>Optional</sup> <a name="DependencyType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.dependencyType"></a>

```csharp
public string DependencyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#dependency_type Greengrassv2ComponentVersion#dependency_type}.

---

##### `VersionRequirement`<sup>Optional</sup> <a name="VersionRequirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.versionRequirement"></a>

```csharp
public string VersionRequirement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#version_requirement Greengrassv2ComponentVersion#version_requirement}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters {
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources[] EventSources = null,
    string[] ExecArgs = null,
    string InputPayloadEncodingType = null,
    Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams LinuxProcessParams = null,
    double MaxIdleTimeInSeconds = null,
    double MaxInstancesCount = null,
    double MaxQueueSize = null,
    bool|IResolvable Pinned = null,
    double StatusTimeoutInSeconds = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#environment_variables Greengrassv2ComponentVersion#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.eventSources">EventSources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#event_sources Greengrassv2ComponentVersion#event_sources}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.execArgs">ExecArgs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#exec_args Greengrassv2ComponentVersion#exec_args}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.inputPayloadEncodingType">InputPayloadEncodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.linuxProcessParams">LinuxProcessParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#linux_process_params Greengrassv2ComponentVersion#linux_process_params}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxIdleTimeInSeconds">MaxIdleTimeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxInstancesCount">MaxInstancesCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_instances_count Greengrassv2ComponentVersion#max_instances_count}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxQueueSize">MaxQueueSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_queue_size Greengrassv2ComponentVersion#max_queue_size}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.pinned">Pinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#pinned Greengrassv2ComponentVersion#pinned}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.statusTimeoutInSeconds">StatusTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}. |

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#environment_variables Greengrassv2ComponentVersion#environment_variables}.

---

##### `EventSources`<sup>Optional</sup> <a name="EventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.eventSources"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources[] EventSources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#event_sources Greengrassv2ComponentVersion#event_sources}.

---

##### `ExecArgs`<sup>Optional</sup> <a name="ExecArgs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.execArgs"></a>

```csharp
public string[] ExecArgs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#exec_args Greengrassv2ComponentVersion#exec_args}.

---

##### `InputPayloadEncodingType`<sup>Optional</sup> <a name="InputPayloadEncodingType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.inputPayloadEncodingType"></a>

```csharp
public string InputPayloadEncodingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}.

---

##### `LinuxProcessParams`<sup>Optional</sup> <a name="LinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.linuxProcessParams"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams LinuxProcessParams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#linux_process_params Greengrassv2ComponentVersion#linux_process_params}.

---

##### `MaxIdleTimeInSeconds`<sup>Optional</sup> <a name="MaxIdleTimeInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxIdleTimeInSeconds"></a>

```csharp
public double MaxIdleTimeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}.

---

##### `MaxInstancesCount`<sup>Optional</sup> <a name="MaxInstancesCount" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxInstancesCount"></a>

```csharp
public double MaxInstancesCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_instances_count Greengrassv2ComponentVersion#max_instances_count}.

---

##### `MaxQueueSize`<sup>Optional</sup> <a name="MaxQueueSize" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxQueueSize"></a>

```csharp
public double MaxQueueSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_queue_size Greengrassv2ComponentVersion#max_queue_size}.

---

##### `Pinned`<sup>Optional</sup> <a name="Pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.pinned"></a>

```csharp
public bool|IResolvable Pinned { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#pinned Greengrassv2ComponentVersion#pinned}.

---

##### `StatusTimeoutInSeconds`<sup>Optional</sup> <a name="StatusTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.statusTimeoutInSeconds"></a>

```csharp
public double StatusTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources {
    string Topic = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#topic Greengrassv2ComponentVersion#topic}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#type Greengrassv2ComponentVersion#type}. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#topic Greengrassv2ComponentVersion#topic}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#type Greengrassv2ComponentVersion#type}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams {
    Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams ContainerParams = null,
    string IsolationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.containerParams">ContainerParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#container_params Greengrassv2ComponentVersion#container_params}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.isolationMode">IsolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#isolation_mode Greengrassv2ComponentVersion#isolation_mode}. |

---

##### `ContainerParams`<sup>Optional</sup> <a name="ContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.containerParams"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams ContainerParams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#container_params Greengrassv2ComponentVersion#container_params}.

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.isolationMode"></a>

```csharp
public string IsolationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#isolation_mode Greengrassv2ComponentVersion#isolation_mode}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams {
    IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices[] Devices = null,
    double MemorySizeInKb = null,
    bool|IResolvable MountRoSysfs = null,
    IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes[] Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.devices">Devices</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#devices Greengrassv2ComponentVersion#devices}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.memorySizeInKb">MemorySizeInKb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.mountRoSysfs">MountRoSysfs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.volumes">Volumes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#volumes Greengrassv2ComponentVersion#volumes}. |

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.devices"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices[] Devices { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#devices Greengrassv2ComponentVersion#devices}.

---

##### `MemorySizeInKb`<sup>Optional</sup> <a name="MemorySizeInKb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.memorySizeInKb"></a>

```csharp
public double MemorySizeInKb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}.

---

##### `MountRoSysfs`<sup>Optional</sup> <a name="MountRoSysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.mountRoSysfs"></a>

```csharp
public bool|IResolvable MountRoSysfs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}.

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.volumes"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes[] Volumes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#volumes Greengrassv2ComponentVersion#volumes}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices {
    bool|IResolvable AddGroupOwner = null,
    string Path = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.addGroupOwner">AddGroupOwner</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#path Greengrassv2ComponentVersion#path}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}. |

---

##### `AddGroupOwner`<sup>Optional</sup> <a name="AddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.addGroupOwner"></a>

```csharp
public bool|IResolvable AddGroupOwner { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#path Greengrassv2ComponentVersion#path}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes {
    bool|IResolvable AddGroupOwner = null,
    string DestinationPath = null,
    string Permission = null,
    string SourcePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.addGroupOwner">AddGroupOwner</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.destinationPath">DestinationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#destination_path Greengrassv2ComponentVersion#destination_path}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.sourcePath">SourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#source_path Greengrassv2ComponentVersion#source_path}. |

---

##### `AddGroupOwner`<sup>Optional</sup> <a name="AddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.addGroupOwner"></a>

```csharp
public bool|IResolvable AddGroupOwner { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}.

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.destinationPath"></a>

```csharp
public string DestinationPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#destination_path Greengrassv2ComponentVersion#destination_path}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}.

---

##### `SourcePath`<sup>Optional</sup> <a name="SourcePath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.sourcePath"></a>

```csharp
public string SourcePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#source_path Greengrassv2ComponentVersion#source_path}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms {
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#attributes Greengrassv2ComponentVersion#attributes}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#name Greengrassv2ComponentVersion#name}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#attributes Greengrassv2ComponentVersion#attributes}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#name Greengrassv2ComponentVersion#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get"></a>

```csharp
private Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetDependencyType">ResetDependencyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetVersionRequirement">ResetVersionRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencyType` <a name="ResetDependencyType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetDependencyType"></a>

```csharp
private void ResetDependencyType()
```

##### `ResetVersionRequirement` <a name="ResetVersionRequirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetVersionRequirement"></a>

```csharp
private void ResetVersionRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyTypeInput">DependencyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirementInput">VersionRequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType">DependencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement">VersionRequirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependencyTypeInput`<sup>Optional</sup> <a name="DependencyTypeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyTypeInput"></a>

```csharp
public string DependencyTypeInput { get; }
```

- *Type:* string

---

##### `VersionRequirementInput`<sup>Optional</sup> <a name="VersionRequirementInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirementInput"></a>

```csharp
public string VersionRequirementInput { get; }
```

- *Type:* string

---

##### `DependencyType`<sup>Required</sup> <a name="DependencyType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType"></a>

```csharp
public string DependencyType { get; }
```

- *Type:* string

---

##### `VersionRequirement`<sup>Required</sup> <a name="VersionRequirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement"></a>

```csharp
public string VersionRequirement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentDependencies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get"></a>

```csharp
private Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>[]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get"></a>

```csharp
private Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>[]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetAddGroupOwner">ResetAddGroupOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddGroupOwner` <a name="ResetAddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetAddGroupOwner"></a>

```csharp
private void ResetAddGroupOwner()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwnerInput">AddGroupOwnerInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner">AddGroupOwner</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddGroupOwnerInput`<sup>Optional</sup> <a name="AddGroupOwnerInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwnerInput"></a>

```csharp
public bool|IResolvable AddGroupOwnerInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `AddGroupOwner`<sup>Required</sup> <a name="AddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner"></a>

```csharp
public bool|IResolvable AddGroupOwner { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices">PutDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMemorySizeInKb">ResetMemorySizeInKb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMountRoSysfs">ResetMountRoSysfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDevices` <a name="PutDevices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices"></a>

```csharp
private void PutDevices(IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>[]

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>[]

---

##### `ResetDevices` <a name="ResetDevices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetDevices"></a>

```csharp
private void ResetDevices()
```

##### `ResetMemorySizeInKb` <a name="ResetMemorySizeInKb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMemorySizeInKb"></a>

```csharp
private void ResetMemorySizeInKb()
```

##### `ResetMountRoSysfs` <a name="ResetMountRoSysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMountRoSysfs"></a>

```csharp
private void ResetMountRoSysfs()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices">Devices</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devicesInput">DevicesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKbInput">MemorySizeInKbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfsInput">MountRoSysfsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumesInput">VolumesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb">MemorySizeInKb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs">MountRoSysfs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList Devices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a>

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devicesInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices[] DevicesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>[]

---

##### `MemorySizeInKbInput`<sup>Optional</sup> <a name="MemorySizeInKbInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKbInput"></a>

```csharp
public double MemorySizeInKbInput { get; }
```

- *Type:* double

---

##### `MountRoSysfsInput`<sup>Optional</sup> <a name="MountRoSysfsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfsInput"></a>

```csharp
public bool|IResolvable MountRoSysfsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumesInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes[] VolumesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>[]

---

##### `MemorySizeInKb`<sup>Required</sup> <a name="MemorySizeInKb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb"></a>

```csharp
public double MemorySizeInKb { get; }
```

- *Type:* double

---

##### `MountRoSysfs`<sup>Required</sup> <a name="MountRoSysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs"></a>

```csharp
public bool|IResolvable MountRoSysfs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get"></a>

```csharp
private Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>[]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetAddGroupOwner">ResetAddGroupOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetSourcePath">ResetSourcePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddGroupOwner` <a name="ResetAddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetAddGroupOwner"></a>

```csharp
private void ResetAddGroupOwner()
```

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetDestinationPath"></a>

```csharp
private void ResetDestinationPath()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```

##### `ResetSourcePath` <a name="ResetSourcePath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetSourcePath"></a>

```csharp
private void ResetSourcePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwnerInput">AddGroupOwnerInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePathInput">SourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner">AddGroupOwner</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath">DestinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath">SourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddGroupOwnerInput`<sup>Optional</sup> <a name="AddGroupOwnerInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwnerInput"></a>

```csharp
public bool|IResolvable AddGroupOwnerInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPathInput"></a>

```csharp
public string DestinationPathInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SourcePathInput`<sup>Optional</sup> <a name="SourcePathInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePathInput"></a>

```csharp
public string SourcePathInput { get; }
```

- *Type:* string

---

##### `AddGroupOwner`<sup>Required</sup> <a name="AddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner"></a>

```csharp
public bool|IResolvable AddGroupOwner { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath"></a>

```csharp
public string DestinationPath { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SourcePath`<sup>Required</sup> <a name="SourcePath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath"></a>

```csharp
public string SourcePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams">PutContainerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetContainerParams">ResetContainerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerParams` <a name="PutContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams"></a>

```csharp
private void PutContainerParams(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---

##### `ResetContainerParams` <a name="ResetContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetContainerParams"></a>

```csharp
private void ResetContainerParams()
```

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetIsolationMode"></a>

```csharp
private void ResetIsolationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams">ContainerParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParamsInput">ContainerParamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationModeInput">IsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode">IsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerParams`<sup>Required</sup> <a name="ContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference ContainerParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a>

---

##### `ContainerParamsInput`<sup>Optional</sup> <a name="ContainerParamsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParamsInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams ContainerParamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationModeInput"></a>

```csharp
public string IsolationModeInput { get; }
```

- *Type:* string

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode"></a>

```csharp
public string IsolationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources">PutEventSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams">PutLinuxProcessParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEventSources">ResetEventSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetExecArgs">ResetExecArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetInputPayloadEncodingType">ResetInputPayloadEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetLinuxProcessParams">ResetLinuxProcessParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxIdleTimeInSeconds">ResetMaxIdleTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxInstancesCount">ResetMaxInstancesCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxQueueSize">ResetMaxQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetPinned">ResetPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetStatusTimeoutInSeconds">ResetStatusTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventSources` <a name="PutEventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources"></a>

```csharp
private void PutEventSources(IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>[]

---

##### `PutLinuxProcessParams` <a name="PutLinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams"></a>

```csharp
private void PutLinuxProcessParams(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetEventSources` <a name="ResetEventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEventSources"></a>

```csharp
private void ResetEventSources()
```

##### `ResetExecArgs` <a name="ResetExecArgs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetExecArgs"></a>

```csharp
private void ResetExecArgs()
```

##### `ResetInputPayloadEncodingType` <a name="ResetInputPayloadEncodingType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetInputPayloadEncodingType"></a>

```csharp
private void ResetInputPayloadEncodingType()
```

##### `ResetLinuxProcessParams` <a name="ResetLinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetLinuxProcessParams"></a>

```csharp
private void ResetLinuxProcessParams()
```

##### `ResetMaxIdleTimeInSeconds` <a name="ResetMaxIdleTimeInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxIdleTimeInSeconds"></a>

```csharp
private void ResetMaxIdleTimeInSeconds()
```

##### `ResetMaxInstancesCount` <a name="ResetMaxInstancesCount" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxInstancesCount"></a>

```csharp
private void ResetMaxInstancesCount()
```

##### `ResetMaxQueueSize` <a name="ResetMaxQueueSize" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxQueueSize"></a>

```csharp
private void ResetMaxQueueSize()
```

##### `ResetPinned` <a name="ResetPinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetPinned"></a>

```csharp
private void ResetPinned()
```

##### `ResetStatusTimeoutInSeconds` <a name="ResetStatusTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetStatusTimeoutInSeconds"></a>

```csharp
private void ResetStatusTimeoutInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources">EventSources</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams">LinuxProcessParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSourcesInput">EventSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgsInput">ExecArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingTypeInput">InputPayloadEncodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParamsInput">LinuxProcessParamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSecondsInput">MaxIdleTimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCountInput">MaxInstancesCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSizeInput">MaxQueueSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinnedInput">PinnedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSecondsInput">StatusTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs">ExecArgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType">InputPayloadEncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds">MaxIdleTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount">MaxInstancesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize">MaxQueueSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned">Pinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds">StatusTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventSources`<sup>Required</sup> <a name="EventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList EventSources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a>

---

##### `LinuxProcessParams`<sup>Required</sup> <a name="LinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference LinuxProcessParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EventSourcesInput`<sup>Optional</sup> <a name="EventSourcesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSourcesInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources[] EventSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>[]

---

##### `ExecArgsInput`<sup>Optional</sup> <a name="ExecArgsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgsInput"></a>

```csharp
public string[] ExecArgsInput { get; }
```

- *Type:* string[]

---

##### `InputPayloadEncodingTypeInput`<sup>Optional</sup> <a name="InputPayloadEncodingTypeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingTypeInput"></a>

```csharp
public string InputPayloadEncodingTypeInput { get; }
```

- *Type:* string

---

##### `LinuxProcessParamsInput`<sup>Optional</sup> <a name="LinuxProcessParamsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParamsInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams LinuxProcessParamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---

##### `MaxIdleTimeInSecondsInput`<sup>Optional</sup> <a name="MaxIdleTimeInSecondsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSecondsInput"></a>

```csharp
public double MaxIdleTimeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxInstancesCountInput`<sup>Optional</sup> <a name="MaxInstancesCountInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCountInput"></a>

```csharp
public double MaxInstancesCountInput { get; }
```

- *Type:* double

---

##### `MaxQueueSizeInput`<sup>Optional</sup> <a name="MaxQueueSizeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSizeInput"></a>

```csharp
public double MaxQueueSizeInput { get; }
```

- *Type:* double

---

##### `PinnedInput`<sup>Optional</sup> <a name="PinnedInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinnedInput"></a>

```csharp
public bool|IResolvable PinnedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatusTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatusTimeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSecondsInput"></a>

```csharp
public double StatusTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExecArgs`<sup>Required</sup> <a name="ExecArgs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs"></a>

```csharp
public string[] ExecArgs { get; }
```

- *Type:* string[]

---

##### `InputPayloadEncodingType`<sup>Required</sup> <a name="InputPayloadEncodingType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType"></a>

```csharp
public string InputPayloadEncodingType { get; }
```

- *Type:* string

---

##### `MaxIdleTimeInSeconds`<sup>Required</sup> <a name="MaxIdleTimeInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds"></a>

```csharp
public double MaxIdleTimeInSeconds { get; }
```

- *Type:* double

---

##### `MaxInstancesCount`<sup>Required</sup> <a name="MaxInstancesCount" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount"></a>

```csharp
public double MaxInstancesCount { get; }
```

- *Type:* double

---

##### `MaxQueueSize`<sup>Required</sup> <a name="MaxQueueSize" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize"></a>

```csharp
public double MaxQueueSize { get; }
```

- *Type:* double

---

##### `Pinned`<sup>Required</sup> <a name="Pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned"></a>

```csharp
public bool|IResolvable Pinned { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatusTimeoutInSeconds`<sup>Required</sup> <a name="StatusTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds"></a>

```csharp
public double StatusTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get"></a>

```csharp
private Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>[]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>

---


### Greengrassv2ComponentVersionLambdaFunctionOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Greengrassv2ComponentVersionLambdaFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies">PutComponentDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters">PutComponentLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms">PutComponentPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentDependencies">ResetComponentDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentLambdaParameters">ResetComponentLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentName">ResetComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentPlatforms">ResetComponentPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentVersion">ResetComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComponentDependencies` <a name="PutComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies"></a>

```csharp
private void PutComponentDependencies(IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

---

##### `PutComponentLambdaParameters` <a name="PutComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters"></a>

```csharp
private void PutComponentLambdaParameters(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---

##### `PutComponentPlatforms` <a name="PutComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms"></a>

```csharp
private void PutComponentPlatforms(IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>[]

---

##### `ResetComponentDependencies` <a name="ResetComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentDependencies"></a>

```csharp
private void ResetComponentDependencies()
```

##### `ResetComponentLambdaParameters` <a name="ResetComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentLambdaParameters"></a>

```csharp
private void ResetComponentLambdaParameters()
```

##### `ResetComponentName` <a name="ResetComponentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentName"></a>

```csharp
private void ResetComponentName()
```

##### `ResetComponentPlatforms` <a name="ResetComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentPlatforms"></a>

```csharp
private void ResetComponentPlatforms()
```

##### `ResetComponentVersion` <a name="ResetComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentVersion"></a>

```csharp
private void ResetComponentVersion()
```

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetLambdaArn"></a>

```csharp
private void ResetLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies">ComponentDependencies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters">ComponentLambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms">ComponentPlatforms</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependenciesInput">ComponentDependenciesInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParametersInput">ComponentLambdaParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentNameInput">ComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatformsInput">ComponentPlatformsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersionInput">ComponentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName">ComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion">ComponentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentDependencies`<sup>Required</sup> <a name="ComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap ComponentDependencies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a>

---

##### `ComponentLambdaParameters`<sup>Required</sup> <a name="ComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference ComponentLambdaParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a>

---

##### `ComponentPlatforms`<sup>Required</sup> <a name="ComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms"></a>

```csharp
public Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList ComponentPlatforms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a>

---

##### `ComponentDependenciesInput`<sup>Optional</sup> <a name="ComponentDependenciesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependenciesInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> ComponentDependenciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

---

##### `ComponentLambdaParametersInput`<sup>Optional</sup> <a name="ComponentLambdaParametersInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParametersInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters ComponentLambdaParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---

##### `ComponentNameInput`<sup>Optional</sup> <a name="ComponentNameInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentNameInput"></a>

```csharp
public string ComponentNameInput { get; }
```

- *Type:* string

---

##### `ComponentPlatformsInput`<sup>Optional</sup> <a name="ComponentPlatformsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatformsInput"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms[] ComponentPlatformsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>[]

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersionInput"></a>

```csharp
public string ComponentVersionInput { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName"></a>

```csharp
public string ComponentName { get; }
```

- *Type:* string

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion"></a>

```csharp
public string ComponentVersion { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Greengrassv2ComponentVersionLambdaFunction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---



