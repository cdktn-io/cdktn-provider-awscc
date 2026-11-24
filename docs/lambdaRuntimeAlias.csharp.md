# `lambdaRuntimeAlias` Submodule <a name="`lambdaRuntimeAlias` Submodule" id="@cdktn/provider-awscc.lambdaRuntimeAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeAlias <a name="LambdaRuntimeAlias" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias awscc_lambda_runtime_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeAlias(Construct Scope, string Id, LambdaRuntimeAliasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig">LambdaRuntimeAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig">LambdaRuntimeAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle">PutReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle">ResetReleaseLifecycle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReleaseLifecycle` <a name="PutReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle"></a>

```csharp
private void PutReleaseLifecycle(LambdaRuntimeAliasReleaseLifecycle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetReleaseLifecycle` <a name="ResetReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle"></a>

```csharp
private void ResetReleaseLifecycle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntimeAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntimeAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntimeAlias.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntimeAlias.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaRuntimeAlias to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaRuntimeAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility">Compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle">ReleaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput">ReleaseLifecycleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput">RuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName">RuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility"></a>

```csharp
public LambdaRuntimeAliasCompatibilityOutputReference Compatibility { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ReleaseLifecycle`<sup>Required</sup> <a name="ReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle"></a>

```csharp
public LambdaRuntimeAliasReleaseLifecycleOutputReference ReleaseLifecycle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a>

---

##### `RuntimeVersionArn`<sup>Required</sup> <a name="RuntimeVersionArn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn"></a>

```csharp
public string RuntimeVersionArn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReleaseLifecycleInput`<sup>Optional</sup> <a name="ReleaseLifecycleInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput"></a>

```csharp
public IResolvable|LambdaRuntimeAliasReleaseLifecycle ReleaseLifecycleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---

##### `RuntimeNameInput`<sup>Optional</sup> <a name="RuntimeNameInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput"></a>

```csharp
public string RuntimeNameInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName"></a>

```csharp
public string RuntimeName { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeAliasCompatibility <a name="LambdaRuntimeAliasCompatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeAliasCompatibility {

};
```


### LambdaRuntimeAliasConfig <a name="LambdaRuntimeAliasConfig" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeAliasConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string RuntimeName,
    string RuntimeVersion,
    string Description = null,
    LambdaRuntimeAliasReleaseLifecycle ReleaseLifecycle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name">Name</a></code> | <code>string</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName">RuntimeName</a></code> | <code>string</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | The runtime version this alias points to. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description">Description</a></code> | <code>string</code> | A description of the runtime alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle">ReleaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#name LambdaRuntimeAlias#name}

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName"></a>

```csharp
public string RuntimeName { get; set; }
```

- *Type:* string

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_name LambdaRuntimeAlias#runtime_name}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

The runtime version this alias points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_version LambdaRuntimeAlias#runtime_version}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the runtime alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#description LambdaRuntimeAlias#description}

---

##### `ReleaseLifecycle`<sup>Optional</sup> <a name="ReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle"></a>

```csharp
public LambdaRuntimeAliasReleaseLifecycle ReleaseLifecycle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_lifecycle LambdaRuntimeAlias#release_lifecycle}

---

### LambdaRuntimeAliasReleaseLifecycle <a name="LambdaRuntimeAliasReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeAliasReleaseLifecycle {
    string DeprecationDate = null,
    string FunctionCreateBlockDate = null,
    string FunctionUpdateBlockDate = null,
    string ReleaseState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate">DeprecationDate</a></code> | <code>string</code> | The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate">FunctionCreateBlockDate</a></code> | <code>string</code> | The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate">FunctionUpdateBlockDate</a></code> | <code>string</code> | The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState">ReleaseState</a></code> | <code>string</code> | The release state of the alias. |

---

##### `DeprecationDate`<sup>Optional</sup> <a name="DeprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate"></a>

```csharp
public string DeprecationDate { get; set; }
```

- *Type:* string

The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#deprecation_date LambdaRuntimeAlias#deprecation_date}

---

##### `FunctionCreateBlockDate`<sup>Optional</sup> <a name="FunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate"></a>

```csharp
public string FunctionCreateBlockDate { get; set; }
```

- *Type:* string

The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_create_block_date LambdaRuntimeAlias#function_create_block_date}

---

##### `FunctionUpdateBlockDate`<sup>Optional</sup> <a name="FunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate"></a>

```csharp
public string FunctionUpdateBlockDate { get; set; }
```

- *Type:* string

The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_update_block_date LambdaRuntimeAlias#function_update_block_date}

---

##### `ReleaseState`<sup>Optional</sup> <a name="ReleaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState"></a>

```csharp
public string ReleaseState { get; set; }
```

- *Type:* string

The release state of the alias.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_state LambdaRuntimeAlias#release_state}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeAliasCompatibilityOutputReference <a name="LambdaRuntimeAliasCompatibilityOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeAliasCompatibilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels">IntegrationModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `IntegrationModels`<sup>Required</sup> <a name="IntegrationModels" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels"></a>

```csharp
public string[] IntegrationModels { get; }
```

- *Type:* string[]

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances"></a>

```csharp
public string ManagedInstances { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue"></a>

```csharp
public LambdaRuntimeAliasCompatibility InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a>

---


### LambdaRuntimeAliasReleaseLifecycleOutputReference <a name="LambdaRuntimeAliasReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeAliasReleaseLifecycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate">ResetDeprecationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate">ResetFunctionCreateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate">ResetFunctionUpdateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState">ResetReleaseState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeprecationDate` <a name="ResetDeprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate"></a>

```csharp
private void ResetDeprecationDate()
```

##### `ResetFunctionCreateBlockDate` <a name="ResetFunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate"></a>

```csharp
private void ResetFunctionCreateBlockDate()
```

##### `ResetFunctionUpdateBlockDate` <a name="ResetFunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate"></a>

```csharp
private void ResetFunctionUpdateBlockDate()
```

##### `ResetReleaseState` <a name="ResetReleaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState"></a>

```csharp
private void ResetReleaseState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput">DeprecationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput">FunctionCreateBlockDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput">FunctionUpdateBlockDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput">ReleaseStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate">DeprecationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate">FunctionCreateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate">FunctionUpdateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState">ReleaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeprecationDateInput`<sup>Optional</sup> <a name="DeprecationDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput"></a>

```csharp
public string DeprecationDateInput { get; }
```

- *Type:* string

---

##### `FunctionCreateBlockDateInput`<sup>Optional</sup> <a name="FunctionCreateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput"></a>

```csharp
public string FunctionCreateBlockDateInput { get; }
```

- *Type:* string

---

##### `FunctionUpdateBlockDateInput`<sup>Optional</sup> <a name="FunctionUpdateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput"></a>

```csharp
public string FunctionUpdateBlockDateInput { get; }
```

- *Type:* string

---

##### `ReleaseStateInput`<sup>Optional</sup> <a name="ReleaseStateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput"></a>

```csharp
public string ReleaseStateInput { get; }
```

- *Type:* string

---

##### `DeprecationDate`<sup>Required</sup> <a name="DeprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate"></a>

```csharp
public string DeprecationDate { get; }
```

- *Type:* string

---

##### `FunctionCreateBlockDate`<sup>Required</sup> <a name="FunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```csharp
public string FunctionCreateBlockDate { get; }
```

- *Type:* string

---

##### `FunctionUpdateBlockDate`<sup>Required</sup> <a name="FunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```csharp
public string FunctionUpdateBlockDate { get; }
```

- *Type:* string

---

##### `ReleaseState`<sup>Required</sup> <a name="ReleaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState"></a>

```csharp
public string ReleaseState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaRuntimeAliasReleaseLifecycle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---



