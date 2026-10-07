# `lambdaWebFunctionRevision` Submodule <a name="`lambdaWebFunctionRevision` Submodule" id="@cdktn/provider-awscc.lambdaWebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaWebFunctionRevision <a name="LambdaWebFunctionRevision" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision awscc_lambda_web_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevision(Construct Scope, string Id, LambdaWebFunctionRevisionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig">LambdaWebFunctionRevisionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig">LambdaWebFunctionRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig">PutBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig">PutServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBuildConfig` <a name="PutBuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig"></a>

```csharp
private void PutBuildConfig(LambdaWebFunctionRevisionBuildConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---

##### `PutServiceConfig` <a name="PutServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig"></a>

```csharp
private void PutServiceConfig(LambdaWebFunctionRevisionServiceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaWebFunctionRevision.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaWebFunctionRevision.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaWebFunctionRevision.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaWebFunctionRevision.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaWebFunctionRevision to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaWebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaWebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn">RevisionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig">ServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput">BuildConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput">ServiceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfigOutputReference BuildConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RevisionArn`<sup>Required</sup> <a name="RevisionArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn"></a>

```csharp
public string RevisionArn { get; }
```

- *Type:* string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `ServiceConfig`<sup>Required</sup> <a name="ServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig"></a>

```csharp
public LambdaWebFunctionRevisionServiceConfigOutputReference ServiceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `BuildConfigInput`<sup>Optional</sup> <a name="BuildConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfig BuildConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `ServiceConfigInput`<sup>Optional</sup> <a name="ServiceConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionServiceConfig ServiceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaWebFunctionRevisionBuildConfig <a name="LambdaWebFunctionRevisionBuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfig {
    LambdaWebFunctionRevisionBuildConfigCodeConfig CodeConfig,
    LambdaWebFunctionRevisionBuildConfigRuntimeConfig RuntimeConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig">CodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | The code configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | The runtime configuration for the revision. |

---

##### `CodeConfig`<sup>Required</sup> <a name="CodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfigCodeConfig CodeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

The code configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#code_config LambdaWebFunctionRevision#code_config}

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfigRuntimeConfig RuntimeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

The runtime configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime_config LambdaWebFunctionRevision#runtime_config}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfig <a name="LambdaWebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfigCodeConfig {
    LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object S3Object
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object">S3Object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | The Amazon S3 location of the deployment artifact. |

---

##### `S3Object`<sup>Required</sup> <a name="S3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object S3Object { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

The Amazon S3 location of the deployment artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#s3_object LambdaWebFunctionRevision#s3_object}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object {
    string Bucket,
    string Key,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket">Bucket</a></code> | <code>string</code> | The S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key">Key</a></code> | <code>string</code> | The S3 object key. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId">VersionId</a></code> | <code>string</code> | The S3 object version ID. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#bucket LambdaWebFunctionRevision#bucket}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The S3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#key LambdaWebFunctionRevision#key}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

The S3 object version ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#version_id LambdaWebFunctionRevision#version_id}

---

### LambdaWebFunctionRevisionBuildConfigRuntimeConfig <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfigRuntimeConfig {
    string Runtime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime">Runtime</a></code> | <code>string</code> | The runtime identifier. |

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

The runtime identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime LambdaWebFunctionRevision#runtime}

---

### LambdaWebFunctionRevisionConfig <a name="LambdaWebFunctionRevisionConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    LambdaWebFunctionRevisionBuildConfig BuildConfig,
    string FunctionName,
    LambdaWebFunctionRevisionServiceConfig ServiceConfig,
    string Description = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | The build configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName">FunctionName</a></code> | <code>string</code> | The name of the web function this revision belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig">ServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | The service configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description">Description</a></code> | <code>string</code> | A description of the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key used to encrypt the revision. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfig BuildConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

The build configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#build_config LambdaWebFunctionRevision#build_config}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

The name of the web function this revision belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#function_name LambdaWebFunctionRevision#function_name}

---

##### `ServiceConfig`<sup>Required</sup> <a name="ServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig"></a>

```csharp
public LambdaWebFunctionRevisionServiceConfig ServiceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

The service configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#service_config LambdaWebFunctionRevision#service_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#description LambdaWebFunctionRevision#description}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key used to encrypt the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#kms_key_arn LambdaWebFunctionRevision#kms_key_arn}

---

### LambdaWebFunctionRevisionServiceConfig <a name="LambdaWebFunctionRevisionServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionServiceConfig {
    string ExecutionRoleArn,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    double MaxConcurrencyPerEnvironment = null,
    LambdaWebFunctionRevisionServiceConfigTelemetryConfig TelemetryConfig = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | The ARN of the execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment">MaxConcurrencyPerEnvironment</a></code> | <code>double</code> | The maximum concurrency per environment. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | The telemetry configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | The function timeout in seconds. |

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

The ARN of the execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#execution_role_arn LambdaWebFunctionRevision#execution_role_arn}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#environment_variables LambdaWebFunctionRevision#environment_variables}

---

##### `MaxConcurrencyPerEnvironment`<sup>Optional</sup> <a name="MaxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment"></a>

```csharp
public double MaxConcurrencyPerEnvironment { get; set; }
```

- *Type:* double

The maximum concurrency per environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#max_concurrency_per_environment LambdaWebFunctionRevision#max_concurrency_per_environment}

---

##### `TelemetryConfig`<sup>Optional</sup> <a name="TelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig"></a>

```csharp
public LambdaWebFunctionRevisionServiceConfigTelemetryConfig TelemetryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

The telemetry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#telemetry_config LambdaWebFunctionRevision#telemetry_config}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

The function timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#timeout_seconds LambdaWebFunctionRevision#timeout_seconds}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionServiceConfigTelemetryConfig {
    LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig LoggingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | The logging configuration for the web function. |

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig"></a>

```csharp
public LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

The logging configuration for the web function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#logging_config LambdaWebFunctionRevision#logging_config}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig {
    string ApplicationLogLevel = null,
    string LogGroup = null,
    string SystemLogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel">ApplicationLogLevel</a></code> | <code>string</code> | The application log level. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup">LogGroup</a></code> | <code>string</code> | The CloudWatch log group name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | The system log level. |

---

##### `ApplicationLogLevel`<sup>Optional</sup> <a name="ApplicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel"></a>

```csharp
public string ApplicationLogLevel { get; set; }
```

- *Type:* string

The application log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#application_log_level LambdaWebFunctionRevision#application_log_level}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

The CloudWatch log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#log_group LambdaWebFunctionRevision#log_group}

---

##### `SystemLogLevel`<sup>Optional</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; set; }
```

- *Type:* string

The system log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#system_log_level LambdaWebFunctionRevision#system_log_level}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object">PutS3Object</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Object` <a name="PutS3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object"></a>

```csharp
private void PutS3Object(LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">S3Object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput">S3ObjectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Object`<sup>Required</sup> <a name="S3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference S3Object { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a>

---

##### `S3ObjectInput`<sup>Optional</sup> <a name="S3ObjectInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object S3ObjectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### LambdaWebFunctionRevisionBuildConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig">PutCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfig` <a name="PutCodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig"></a>

```csharp
private void PutCodeConfig(LambdaWebFunctionRevisionBuildConfigCodeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig"></a>

```csharp
private void PutRuntimeConfig(LambdaWebFunctionRevisionBuildConfigRuntimeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig">CodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput">CodeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeConfig`<sup>Required</sup> <a name="CodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference CodeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```csharp
public LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a>

---

##### `CodeConfigInput`<sup>Optional</sup> <a name="CodeConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfigCodeConfig CodeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfigRuntimeConfig RuntimeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionBuildConfigRuntimeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionServiceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig">PutTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment">ResetMaxConcurrencyPerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig">ResetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTelemetryConfig` <a name="PutTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig"></a>

```csharp
private void PutTelemetryConfig(LambdaWebFunctionRevisionServiceConfigTelemetryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetMaxConcurrencyPerEnvironment` <a name="ResetMaxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment"></a>

```csharp
private void ResetMaxConcurrencyPerEnvironment()
```

##### `ResetTelemetryConfig` <a name="ResetTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig"></a>

```csharp
private void ResetTelemetryConfig()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput">MaxConcurrencyPerEnvironmentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput">TelemetryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">MaxConcurrencyPerEnvironment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```csharp
public LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference TelemetryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `MaxConcurrencyPerEnvironmentInput`<sup>Optional</sup> <a name="MaxConcurrencyPerEnvironmentInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput"></a>

```csharp
public double MaxConcurrencyPerEnvironmentInput { get; }
```

- *Type:* double

---

##### `TelemetryConfigInput`<sup>Optional</sup> <a name="TelemetryConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfig TelemetryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `MaxConcurrencyPerEnvironment`<sup>Required</sup> <a name="MaxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```csharp
public double MaxConcurrencyPerEnvironment { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionServiceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel">ResetApplicationLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">ResetSystemLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationLogLevel` <a name="ResetApplicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```csharp
private void ResetApplicationLogLevel()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```

##### `ResetSystemLogLevel` <a name="ResetSystemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```csharp
private void ResetSystemLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput">ApplicationLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">SystemLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">ApplicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationLogLevelInput`<sup>Optional</sup> <a name="ApplicationLogLevelInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```csharp
public string ApplicationLogLevelInput { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `SystemLogLevelInput`<sup>Optional</sup> <a name="SystemLogLevelInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```csharp
public string SystemLogLevelInput { get; }
```

- *Type:* string

---

##### `ApplicationLogLevel`<sup>Required</sup> <a name="ApplicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```csharp
public string ApplicationLogLevel { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `SystemLogLevel`<sup>Required</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```csharp
public LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a>

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig LoggingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaWebFunctionRevisionServiceConfigTelemetryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---



