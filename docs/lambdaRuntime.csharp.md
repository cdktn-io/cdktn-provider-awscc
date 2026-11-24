# `lambdaRuntime` Submodule <a name="`lambdaRuntime` Submodule" id="@cdktn/provider-awscc.lambdaRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntime <a name="LambdaRuntime" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime awscc_lambda_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntime(Construct Scope, string Id, LambdaRuntimeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig">LambdaRuntimeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig">LambdaRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle">PutReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetLicenseInfo">ResetLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetReleaseLifecycle">ResetReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReleaseLifecycle` <a name="PutReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle"></a>

```csharp
private void PutReleaseLifecycle(LambdaRuntimeReleaseLifecycle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putTags"></a>

```csharp
private void PutTags(IResolvable|LambdaRuntimeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLicenseInfo` <a name="ResetLicenseInfo" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetLicenseInfo"></a>

```csharp
private void ResetLicenseInfo()
```

##### `ResetReleaseLifecycle` <a name="ResetReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetReleaseLifecycle"></a>

```csharp
private void ResetReleaseLifecycle()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntime.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntime.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntime.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaRuntime.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaRuntime resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaRuntime to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycle">ReleaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference">LambdaRuntimeReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList">LambdaRuntimeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfoInput">LicenseInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycleInput">ReleaseLifecycleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfo">LicenseInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ReleaseLifecycle`<sup>Required</sup> <a name="ReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycle"></a>

```csharp
public LambdaRuntimeReleaseLifecycleOutputReference ReleaseLifecycle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference">LambdaRuntimeReleaseLifecycleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tags"></a>

```csharp
public LambdaRuntimeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList">LambdaRuntimeTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LicenseInfoInput`<sup>Optional</sup> <a name="LicenseInfoInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfoInput"></a>

```csharp
public string LicenseInfoInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReleaseLifecycleInput`<sup>Optional</sup> <a name="ReleaseLifecycleInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycleInput"></a>

```csharp
public IResolvable|LambdaRuntimeReleaseLifecycle ReleaseLifecycleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tagsInput"></a>

```csharp
public IResolvable|LambdaRuntimeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LicenseInfo`<sup>Required</sup> <a name="LicenseInfo" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfo"></a>

```csharp
public string LicenseInfo { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeConfig <a name="LambdaRuntimeConfig" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    string LicenseInfo = null,
    LambdaRuntimeReleaseLifecycle ReleaseLifecycle = null,
    IResolvable|LambdaRuntimeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.name">Name</a></code> | <code>string</code> | The name of the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.description">Description</a></code> | <code>string</code> | A description of the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.licenseInfo">LicenseInfo</a></code> | <code>string</code> | Licensing information for the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.releaseLifecycle">ReleaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the runtime. Omitting it removes any stored declaration. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>[]</code> | A list of tags to apply to the runtime. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#name LambdaRuntime#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#description LambdaRuntime#description}

---

##### `LicenseInfo`<sup>Optional</sup> <a name="LicenseInfo" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.licenseInfo"></a>

```csharp
public string LicenseInfo { get; set; }
```

- *Type:* string

Licensing information for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#license_info LambdaRuntime#license_info}

---

##### `ReleaseLifecycle`<sup>Optional</sup> <a name="ReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.releaseLifecycle"></a>

```csharp
public LambdaRuntimeReleaseLifecycle ReleaseLifecycle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

The publisher's lifecycle declaration for the runtime. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_lifecycle LambdaRuntime#release_lifecycle}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.tags"></a>

```csharp
public IResolvable|LambdaRuntimeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>[]

A list of tags to apply to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#tags LambdaRuntime#tags}

---

### LambdaRuntimeReleaseLifecycle <a name="LambdaRuntimeReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeReleaseLifecycle {
    string DeprecationDate = null,
    string FunctionCreateBlockDate = null,
    string FunctionUpdateBlockDate = null,
    string ReleaseState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.deprecationDate">DeprecationDate</a></code> | <code>string</code> | The date on which the runtime becomes deprecated. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionCreateBlockDate">FunctionCreateBlockDate</a></code> | <code>string</code> | The date on which creating new functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionUpdateBlockDate">FunctionUpdateBlockDate</a></code> | <code>string</code> | The date on which updating existing functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.releaseState">ReleaseState</a></code> | <code>string</code> | The release state of the runtime. |

---

##### `DeprecationDate`<sup>Optional</sup> <a name="DeprecationDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.deprecationDate"></a>

```csharp
public string DeprecationDate { get; set; }
```

- *Type:* string

The date on which the runtime becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#deprecation_date LambdaRuntime#deprecation_date}

---

##### `FunctionCreateBlockDate`<sup>Optional</sup> <a name="FunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionCreateBlockDate"></a>

```csharp
public string FunctionCreateBlockDate { get; set; }
```

- *Type:* string

The date on which creating new functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_create_block_date LambdaRuntime#function_create_block_date}

---

##### `FunctionUpdateBlockDate`<sup>Optional</sup> <a name="FunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionUpdateBlockDate"></a>

```csharp
public string FunctionUpdateBlockDate { get; set; }
```

- *Type:* string

The date on which updating existing functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_update_block_date LambdaRuntime#function_update_block_date}

---

##### `ReleaseState`<sup>Optional</sup> <a name="ReleaseState" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.releaseState"></a>

```csharp
public string ReleaseState { get; set; }
```

- *Type:* string

The release state of the runtime.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_state LambdaRuntime#release_state}

---

### LambdaRuntimeTags <a name="LambdaRuntimeTags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#key LambdaRuntime#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#value LambdaRuntime#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeReleaseLifecycleOutputReference <a name="LambdaRuntimeReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeReleaseLifecycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetDeprecationDate">ResetDeprecationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionCreateBlockDate">ResetFunctionCreateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate">ResetFunctionUpdateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetReleaseState">ResetReleaseState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeprecationDate` <a name="ResetDeprecationDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetDeprecationDate"></a>

```csharp
private void ResetDeprecationDate()
```

##### `ResetFunctionCreateBlockDate` <a name="ResetFunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionCreateBlockDate"></a>

```csharp
private void ResetFunctionCreateBlockDate()
```

##### `ResetFunctionUpdateBlockDate` <a name="ResetFunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate"></a>

```csharp
private void ResetFunctionUpdateBlockDate()
```

##### `ResetReleaseState` <a name="ResetReleaseState" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetReleaseState"></a>

```csharp
private void ResetReleaseState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDateInput">DeprecationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDateInput">FunctionCreateBlockDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput">FunctionUpdateBlockDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseStateInput">ReleaseStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDate">DeprecationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDate">FunctionCreateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDate">FunctionUpdateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseState">ReleaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeprecationDateInput`<sup>Optional</sup> <a name="DeprecationDateInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDateInput"></a>

```csharp
public string DeprecationDateInput { get; }
```

- *Type:* string

---

##### `FunctionCreateBlockDateInput`<sup>Optional</sup> <a name="FunctionCreateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDateInput"></a>

```csharp
public string FunctionCreateBlockDateInput { get; }
```

- *Type:* string

---

##### `FunctionUpdateBlockDateInput`<sup>Optional</sup> <a name="FunctionUpdateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput"></a>

```csharp
public string FunctionUpdateBlockDateInput { get; }
```

- *Type:* string

---

##### `ReleaseStateInput`<sup>Optional</sup> <a name="ReleaseStateInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseStateInput"></a>

```csharp
public string ReleaseStateInput { get; }
```

- *Type:* string

---

##### `DeprecationDate`<sup>Required</sup> <a name="DeprecationDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDate"></a>

```csharp
public string DeprecationDate { get; }
```

- *Type:* string

---

##### `FunctionCreateBlockDate`<sup>Required</sup> <a name="FunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```csharp
public string FunctionCreateBlockDate { get; }
```

- *Type:* string

---

##### `FunctionUpdateBlockDate`<sup>Required</sup> <a name="FunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```csharp
public string FunctionUpdateBlockDate { get; }
```

- *Type:* string

---

##### `ReleaseState`<sup>Required</sup> <a name="ReleaseState" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseState"></a>

```csharp
public string ReleaseState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaRuntimeReleaseLifecycle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

---


### LambdaRuntimeTagsList <a name="LambdaRuntimeTagsList" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.get"></a>

```csharp
private LambdaRuntimeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.internalValue"></a>

```csharp
public IResolvable|LambdaRuntimeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>[]

---


### LambdaRuntimeTagsOutputReference <a name="LambdaRuntimeTagsOutputReference" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaRuntimeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaRuntimeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>

---



