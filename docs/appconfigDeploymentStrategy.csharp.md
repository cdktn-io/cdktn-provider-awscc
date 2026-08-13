# `appconfigDeploymentStrategy` Submodule <a name="`appconfigDeploymentStrategy` Submodule" id="@cdktn/provider-awscc.appconfigDeploymentStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigDeploymentStrategy <a name="AppconfigDeploymentStrategy" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy awscc_appconfig_deployment_strategy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigDeploymentStrategy(Construct Scope, string Id, AppconfigDeploymentStrategyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes">ResetFinalBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType">ResetGrowthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.putTags"></a>

```csharp
private void PutTags(IResolvable|AppconfigDeploymentStrategyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFinalBakeTimeInMinutes` <a name="ResetFinalBakeTimeInMinutes" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes"></a>

```csharp
private void ResetFinalBakeTimeInMinutes()
```

##### `ResetGrowthType` <a name="ResetGrowthType" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType"></a>

```csharp
private void ResetGrowthType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigDeploymentStrategy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigDeploymentStrategy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigDeploymentStrategy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigDeploymentStrategy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigDeploymentStrategy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppconfigDeploymentStrategy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigDeploymentStrategy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigDeploymentStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigDeploymentStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentStrategyId">DeploymentStrategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList">AppconfigDeploymentStrategyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput">DeploymentDurationInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput">FinalBakeTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput">GrowthFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput">GrowthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput">ReplicateToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes">DeploymentDurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes">FinalBakeTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor">GrowthFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType">GrowthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo">ReplicateTo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeploymentStrategyId`<sup>Required</sup> <a name="DeploymentStrategyId" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentStrategyId"></a>

```csharp
public string DeploymentStrategyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags"></a>

```csharp
public AppconfigDeploymentStrategyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList">AppconfigDeploymentStrategyTagsList</a>

---

##### `DeploymentDurationInMinutesInput`<sup>Optional</sup> <a name="DeploymentDurationInMinutesInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput"></a>

```csharp
public double DeploymentDurationInMinutesInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FinalBakeTimeInMinutesInput`<sup>Optional</sup> <a name="FinalBakeTimeInMinutesInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput"></a>

```csharp
public double FinalBakeTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `GrowthFactorInput`<sup>Optional</sup> <a name="GrowthFactorInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput"></a>

```csharp
public double GrowthFactorInput { get; }
```

- *Type:* double

---

##### `GrowthTypeInput`<sup>Optional</sup> <a name="GrowthTypeInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput"></a>

```csharp
public string GrowthTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicateToInput`<sup>Optional</sup> <a name="ReplicateToInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput"></a>

```csharp
public string ReplicateToInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput"></a>

```csharp
public IResolvable|AppconfigDeploymentStrategyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>[]

---

##### `DeploymentDurationInMinutes`<sup>Required</sup> <a name="DeploymentDurationInMinutes" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

```csharp
public double DeploymentDurationInMinutes { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FinalBakeTimeInMinutes`<sup>Required</sup> <a name="FinalBakeTimeInMinutes" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

```csharp
public double FinalBakeTimeInMinutes { get; }
```

- *Type:* double

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor"></a>

```csharp
public double GrowthFactor { get; }
```

- *Type:* double

---

##### `GrowthType`<sup>Required</sup> <a name="GrowthType" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType"></a>

```csharp
public string GrowthType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicateTo`<sup>Required</sup> <a name="ReplicateTo" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo"></a>

```csharp
public string ReplicateTo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigDeploymentStrategyConfig <a name="AppconfigDeploymentStrategyConfig" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigDeploymentStrategyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double DeploymentDurationInMinutes,
    double GrowthFactor,
    string Name,
    string ReplicateTo,
    string Description = null,
    double FinalBakeTimeInMinutes = null,
    string GrowthType = null,
    IResolvable|AppconfigDeploymentStrategyTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes">DeploymentDurationInMinutes</a></code> | <code>double</code> | Total amount of time for a deployment to last. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor">GrowthFactor</a></code> | <code>double</code> | The percentage of targets to receive a deployed configuration during each interval. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name">Name</a></code> | <code>string</code> | A name for the deployment strategy. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo">ReplicateTo</a></code> | <code>string</code> | Save the deployment strategy to a Systems Manager (SSM) document. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description">Description</a></code> | <code>string</code> | A description of the deployment strategy. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes">FinalBakeTimeInMinutes</a></code> | <code>double</code> | Specifies the amount of time AWS AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType">GrowthType</a></code> | <code>string</code> | The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>[]</code> | Assigns metadata to an AWS AppConfig resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeploymentDurationInMinutes`<sup>Required</sup> <a name="DeploymentDurationInMinutes" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes"></a>

```csharp
public double DeploymentDurationInMinutes { get; set; }
```

- *Type:* double

Total amount of time for a deployment to last.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor"></a>

```csharp
public double GrowthFactor { get; set; }
```

- *Type:* double

The percentage of targets to receive a deployed configuration during each interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the deployment strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}

---

##### `ReplicateTo`<sup>Required</sup> <a name="ReplicateTo" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo"></a>

```csharp
public string ReplicateTo { get; set; }
```

- *Type:* string

Save the deployment strategy to a Systems Manager (SSM) document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the deployment strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}

---

##### `FinalBakeTimeInMinutes`<sup>Optional</sup> <a name="FinalBakeTimeInMinutes" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes"></a>

```csharp
public double FinalBakeTimeInMinutes { get; set; }
```

- *Type:* double

Specifies the amount of time AWS AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete.

If an alarm is triggered during this time, AWS AppConfig rolls back the deployment. You must configure permissions for AWS AppConfig to roll back based on CloudWatch alarms. For more information, see Configuring permissions for rollback based on Amazon CloudWatch alarms in the AWS AppConfig User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}

---

##### `GrowthType`<sup>Optional</sup> <a name="GrowthType" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType"></a>

```csharp
public string GrowthType { get; set; }
```

- *Type:* string

The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:.

Linear: For this type, AWS AppConfig processes the deployment by dividing the total number of targets by the value specified for Step percentage. For example, a linear deployment that uses a Step percentage of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.

Exponential: For this type, AWS AppConfig processes the deployment exponentially using the following formula: G*(2^N). In this formula, G is the growth factor specified by the user and N is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:

2*(2^0)

2*(2^1)

2*(2^2)

Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags"></a>

```csharp
public IResolvable|AppconfigDeploymentStrategyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>[]

Assigns metadata to an AWS AppConfig resource.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}

---

### AppconfigDeploymentStrategyTags <a name="AppconfigDeploymentStrategyTags" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigDeploymentStrategyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#key AppconfigDeploymentStrategy#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_deployment_strategy#value AppconfigDeploymentStrategy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigDeploymentStrategyTagsList <a name="AppconfigDeploymentStrategyTagsList" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigDeploymentStrategyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.get"></a>

```csharp
private AppconfigDeploymentStrategyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppconfigDeploymentStrategyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>[]

---


### AppconfigDeploymentStrategyTagsOutputReference <a name="AppconfigDeploymentStrategyTagsOutputReference" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigDeploymentStrategyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigDeploymentStrategyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigDeploymentStrategy.AppconfigDeploymentStrategyTags">AppconfigDeploymentStrategyTags</a>

---



