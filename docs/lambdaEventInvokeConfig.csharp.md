# `lambdaEventInvokeConfig` Submodule <a name="`lambdaEventInvokeConfig` Submodule" id="@cdktn/provider-awscc.lambdaEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventInvokeConfig <a name="LambdaEventInvokeConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config awscc_lambda_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfig(Construct Scope, string Id, LambdaEventInvokeConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig">LambdaEventInvokeConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig">LambdaEventInvokeConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig">PutDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig">ResetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds">ResetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts">ResetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationConfig` <a name="PutDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig"></a>

```csharp
private void PutDestinationConfig(LambdaEventInvokeConfigDestinationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---

##### `ResetDestinationConfig` <a name="ResetDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig"></a>

```csharp
private void ResetDestinationConfig()
```

##### `ResetMaximumEventAgeInSeconds` <a name="ResetMaximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds"></a>

```csharp
private void ResetMaximumEventAgeInSeconds()
```

##### `ResetMaximumRetryAttempts` <a name="ResetMaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts"></a>

```csharp
private void ResetMaximumRetryAttempts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventInvokeConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventInvokeConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventInvokeConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaEventInvokeConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaEventInvokeConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaEventInvokeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaEventInvokeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput">DestinationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput">MaximumEventAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput">MaximumRetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationConfig`<sup>Required</sup> <a name="DestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig"></a>

```csharp
public LambdaEventInvokeConfigDestinationConfigOutputReference DestinationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DestinationConfigInput`<sup>Optional</sup> <a name="DestinationConfigInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput"></a>

```csharp
public IResolvable|LambdaEventInvokeConfigDestinationConfig DestinationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `MaximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaximumEventAgeInSecondsInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput"></a>

```csharp
public double MaximumEventAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaximumRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumRetryAttemptsInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput"></a>

```csharp
public double MaximumRetryAttemptsInput { get; }
```

- *Type:* double

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `MaximumEventAgeInSeconds`<sup>Required</sup> <a name="MaximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```csharp
public double MaximumEventAgeInSeconds { get; }
```

- *Type:* double

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts"></a>

```csharp
public double MaximumRetryAttempts { get; }
```

- *Type:* double

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventInvokeConfigConfig <a name="LambdaEventInvokeConfigConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FunctionName,
    string Qualifier,
    LambdaEventInvokeConfigDestinationConfig DestinationConfig = null,
    double MaximumEventAgeInSeconds = null,
    double MaximumRetryAttempts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName">FunctionName</a></code> | <code>string</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier">Qualifier</a></code> | <code>string</code> | The identifier of a version or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | A destination for events after they have been sent to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>double</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>double</code> | The maximum number of times to retry when the function returns an error. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#function_name LambdaEventInvokeConfig#function_name}

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

The identifier of a version or alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#qualifier LambdaEventInvokeConfig#qualifier}

---

##### `DestinationConfig`<sup>Optional</sup> <a name="DestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig"></a>

```csharp
public LambdaEventInvokeConfigDestinationConfig DestinationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

A destination for events after they have been sent to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#destination_config LambdaEventInvokeConfig#destination_config}

---

##### `MaximumEventAgeInSeconds`<sup>Optional</sup> <a name="MaximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds"></a>

```csharp
public double MaximumEventAgeInSeconds { get; set; }
```

- *Type:* double

The maximum age of a request that Lambda sends to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#maximum_event_age_in_seconds LambdaEventInvokeConfig#maximum_event_age_in_seconds}

---

##### `MaximumRetryAttempts`<sup>Optional</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts"></a>

```csharp
public double MaximumRetryAttempts { get; set; }
```

- *Type:* double

The maximum number of times to retry when the function returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#maximum_retry_attempts LambdaEventInvokeConfig#maximum_retry_attempts}

---

### LambdaEventInvokeConfigDestinationConfig <a name="LambdaEventInvokeConfigDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfigDestinationConfig {
    LambdaEventInvokeConfigDestinationConfigOnFailure OnFailure = null,
    LambdaEventInvokeConfigDestinationConfigOnSuccess OnSuccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | The destination configuration for failed invocations. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | The destination configuration for successful invocations. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure"></a>

```csharp
public LambdaEventInvokeConfigDestinationConfigOnFailure OnFailure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#on_failure LambdaEventInvokeConfig#on_failure}

---

##### `OnSuccess`<sup>Optional</sup> <a name="OnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess"></a>

```csharp
public LambdaEventInvokeConfigDestinationConfigOnSuccess OnSuccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

The destination configuration for successful invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#on_success LambdaEventInvokeConfig#on_success}

---

### LambdaEventInvokeConfigDestinationConfigOnFailure <a name="LambdaEventInvokeConfigDestinationConfigOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfigDestinationConfigOnFailure {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination">Destination</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

### LambdaEventInvokeConfigDestinationConfigOnSuccess <a name="LambdaEventInvokeConfigDestinationConfigOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfigDestinationConfigOnSuccess {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination">Destination</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnFailure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---


### LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnSuccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---


### LambdaEventInvokeConfigDestinationConfigOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaEventInvokeConfigDestinationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess">PutOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess">ResetOnSuccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure"></a>

```csharp
private void PutOnFailure(LambdaEventInvokeConfigDestinationConfigOnFailure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `PutOnSuccess` <a name="PutOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess"></a>

```csharp
private void PutOnSuccess(LambdaEventInvokeConfigDestinationConfigOnSuccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```

##### `ResetOnSuccess` <a name="ResetOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess"></a>

```csharp
private void ResetOnSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput">OnSuccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```csharp
public LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference OnFailure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `OnSuccess`<sup>Required</sup> <a name="OnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```csharp
public LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference OnSuccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput"></a>

```csharp
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnFailure OnFailureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `OnSuccessInput`<sup>Optional</sup> <a name="OnSuccessInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput"></a>

```csharp
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnSuccess OnSuccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaEventInvokeConfigDestinationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---



