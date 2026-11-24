# `sagemakerInferenceRouter` Submodule <a name="`sagemakerInferenceRouter` Submodule" id="@cdktn/provider-awscc.sagemakerInferenceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceRouter <a name="SagemakerInferenceRouter" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router awscc_sagemaker_inference_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouter(Construct Scope, string Id, SagemakerInferenceRouterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig">SagemakerInferenceRouterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig">SagemakerInferenceRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets">PutRoutingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetInferenceRouterName">ResetInferenceRouterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutingTargets` <a name="PutRoutingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets"></a>

```csharp
private void PutRoutingTargets(IResolvable|SagemakerInferenceRouterRoutingTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerInferenceRouterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>[]

---

##### `ResetInferenceRouterName` <a name="ResetInferenceRouterName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetInferenceRouterName"></a>

```csharp
private void ResetInferenceRouterName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceRouter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerInferenceRouter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerInferenceRouter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerInferenceRouter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerInferenceRouter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerInferenceRouter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerInferenceRouter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerInferenceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterArn">InferenceRouterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargets">RoutingTargets</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList">SagemakerInferenceRouterRoutingTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList">SagemakerInferenceRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterNameInput">InferenceRouterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargetsInput">RoutingTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterName">InferenceRouterName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InferenceRouterArn`<sup>Required</sup> <a name="InferenceRouterArn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterArn"></a>

```csharp
public string InferenceRouterArn { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `RoutingTargets`<sup>Required</sup> <a name="RoutingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargets"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsList RoutingTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList">SagemakerInferenceRouterRoutingTargetsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tags"></a>

```csharp
public SagemakerInferenceRouterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList">SagemakerInferenceRouterTagsList</a>

---

##### `InferenceRouterNameInput`<sup>Optional</sup> <a name="InferenceRouterNameInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterNameInput"></a>

```csharp
public string InferenceRouterNameInput { get; }
```

- *Type:* string

---

##### `RoutingTargetsInput`<sup>Optional</sup> <a name="RoutingTargetsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargetsInput"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargets[] RoutingTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerInferenceRouterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>[]

---

##### `InferenceRouterName`<sup>Required</sup> <a name="InferenceRouterName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterName"></a>

```csharp
public string InferenceRouterName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceRouterConfig <a name="SagemakerInferenceRouterConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|SagemakerInferenceRouterRoutingTargets[] RoutingTargets,
    string InferenceRouterName = null,
    IResolvable|SagemakerInferenceRouterTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.routingTargets">RoutingTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>[]</code> | The routing targets of the Inference Router. An update replaces the full list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.inferenceRouterName">InferenceRouterName</a></code> | <code>string</code> | The name of the Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>[]</code> | Tags to associate with the Inference Router. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RoutingTargets`<sup>Required</sup> <a name="RoutingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.routingTargets"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargets[] RoutingTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>[]

The routing targets of the Inference Router. An update replaces the full list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_targets SagemakerInferenceRouter#routing_targets}

---

##### `InferenceRouterName`<sup>Optional</sup> <a name="InferenceRouterName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.inferenceRouterName"></a>

```csharp
public string InferenceRouterName { get; set; }
```

- *Type:* string

The name of the Inference Router.

Unique per account per Region, case-sensitive. If you don't specify a name, CloudFormation generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#inference_router_name SagemakerInferenceRouter#inference_router_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerInferenceRouterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>[]

Tags to associate with the Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#tags SagemakerInferenceRouter#tags}

---

### SagemakerInferenceRouterRoutingTargets <a name="SagemakerInferenceRouterRoutingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargets {
    IResolvable|SagemakerInferenceRouterRoutingTargetsDestinations[] Destinations,
    string Name,
    SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig AsyncInferenceConfig = null,
    string RoutingPreference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>[]</code> | The endpoints and inference components that serve this routing target. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.name">Name</a></code> | <code>string</code> | The logical model name a caller passes at invoke time. Unique within an Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | Set this when the routing target's destinations are asynchronous inference endpoints. A routing target without it serves real-time requests. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.routingPreference">RoutingPreference</a></code> | <code>string</code> | How the router prefers this routing target's destinations. |

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.destinations"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>[]

The endpoints and inference components that serve this routing target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#destinations SagemakerInferenceRouter#destinations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The logical model name a caller passes at invoke time. Unique within an Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#name SagemakerInferenceRouter#name}

---

##### `AsyncInferenceConfig`<sup>Optional</sup> <a name="AsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.asyncInferenceConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig AsyncInferenceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

Set this when the routing target's destinations are asynchronous inference endpoints. A routing target without it serves real-time requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#async_inference_config SagemakerInferenceRouter#async_inference_config}

---

##### `RoutingPreference`<sup>Optional</sup> <a name="RoutingPreference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.routingPreference"></a>

```csharp
public string RoutingPreference { get; set; }
```

- *Type:* string

How the router prefers this routing target's destinations.

LocalRegionFirst (the default) uses destinations in the router's Region first, then the others, each group in the order listed. InstancePoolOrder, for asynchronous routing targets only, tries destinations in order of the best instance pool they can serve from now. In both, degraded destinations are used after the others. If omitted, LocalRegionFirst is used and returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_preference SagemakerInferenceRouter#routing_preference}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig {
    SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig ClientConfig = null,
    SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig OutputConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | How the Inference Router submits a request to a destination. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths. |

---

##### `ClientConfig`<sup>Optional</sup> <a name="ClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.clientConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig ClientConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

How the Inference Router submits a request to a destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#client_config SagemakerInferenceRouter#client_config}

---

##### `OutputConfig`<sup>Optional</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.outputConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig OutputConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#output_config SagemakerInferenceRouter#output_config}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig {
    double MaxTimeInBacklogSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.property.maxTimeInBacklogSeconds">MaxTimeInBacklogSeconds</a></code> | <code>double</code> | How long, in seconds, a request can wait for a destination to pick it up before it expires. |

---

##### `MaxTimeInBacklogSeconds`<sup>Optional</sup> <a name="MaxTimeInBacklogSeconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.property.maxTimeInBacklogSeconds"></a>

```csharp
public double MaxTimeInBacklogSeconds { get; set; }
```

- *Type:* double

How long, in seconds, a request can wait for a destination to pick it up before it expires.

The default is 900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#max_time_in_backlog_seconds SagemakerInferenceRouter#max_time_in_backlog_seconds}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig {
    string KmsKeyId = null,
    SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig NotificationConfig = null,
    string S3FailurePath = null,
    string S3OutputPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The AWS KMS key that encrypts the results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | The SNS topics the Inference Router publishes a completion to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3FailurePath">S3FailurePath</a></code> | <code>string</code> | The Amazon S3 location for failed requests. It can be in any Region and account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | The Amazon S3 location for successful results. It can be in any Region and account. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The AWS KMS key that encrypts the results.

If any destination is in a different account or Region from the Inference Router, use a key ARN or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#kms_key_id SagemakerInferenceRouter#kms_key_id}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.notificationConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig NotificationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

The SNS topics the Inference Router publishes a completion to.

The notification carries the location of the result, not the result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#notification_config SagemakerInferenceRouter#notification_config}

---

##### `S3FailurePath`<sup>Optional</sup> <a name="S3FailurePath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3FailurePath"></a>

```csharp
public string S3FailurePath { get; set; }
```

- *Type:* string

The Amazon S3 location for failed requests. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_failure_path SagemakerInferenceRouter#s3_failure_path}

---

##### `S3OutputPath`<sup>Optional</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; set; }
```

- *Type:* string

The Amazon S3 location for successful results. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_output_path SagemakerInferenceRouter#s3_output_path}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig {
    string ErrorTopic = null,
    string SuccessTopic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic">ErrorTopic</a></code> | <code>string</code> | The ARN of a standard (not FIFO) SNS topic to notify when a request fails. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic">SuccessTopic</a></code> | <code>string</code> | The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds. |

---

##### `ErrorTopic`<sup>Optional</sup> <a name="ErrorTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic"></a>

```csharp
public string ErrorTopic { get; set; }
```

- *Type:* string

The ARN of a standard (not FIFO) SNS topic to notify when a request fails.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#error_topic SagemakerInferenceRouter#error_topic}

---

##### `SuccessTopic`<sup>Optional</sup> <a name="SuccessTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic"></a>

```csharp
public string SuccessTopic { get; set; }
```

- *Type:* string

The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#success_topic SagemakerInferenceRouter#success_topic}

---

### SagemakerInferenceRouterRoutingTargetsDestinations <a name="SagemakerInferenceRouterRoutingTargetsDestinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsDestinations {
    string ResourceArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The ARN of a SageMaker endpoint or inference component that serves the routing target. |

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The ARN of a SageMaker endpoint or inference component that serves the routing target.

It can be in any Region and account within the Inference Router's partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#resource_arn SagemakerInferenceRouter#resource_arn}

---

### SagemakerInferenceRouterTags <a name="SagemakerInferenceRouterTags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.key">Key</a></code> | <code>string</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#key SagemakerInferenceRouter#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#value SagemakerInferenceRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resetMaxTimeInBacklogSeconds">ResetMaxTimeInBacklogSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTimeInBacklogSeconds` <a name="ResetMaxTimeInBacklogSeconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resetMaxTimeInBacklogSeconds"></a>

```csharp
private void ResetMaxTimeInBacklogSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSecondsInput">MaxTimeInBacklogSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds">MaxTimeInBacklogSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTimeInBacklogSecondsInput`<sup>Optional</sup> <a name="MaxTimeInBacklogSecondsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSecondsInput"></a>

```csharp
public double MaxTimeInBacklogSecondsInput { get; }
```

- *Type:* double

---

##### `MaxTimeInBacklogSeconds`<sup>Required</sup> <a name="MaxTimeInBacklogSeconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds"></a>

```csharp
public double MaxTimeInBacklogSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic">ResetErrorTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic">ResetSuccessTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorTopic` <a name="ResetErrorTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic"></a>

```csharp
private void ResetErrorTopic()
```

##### `ResetSuccessTopic` <a name="ResetSuccessTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic"></a>

```csharp
private void ResetSuccessTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput">ErrorTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput">SuccessTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">ErrorTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">SuccessTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorTopicInput`<sup>Optional</sup> <a name="ErrorTopicInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput"></a>

```csharp
public string ErrorTopicInput { get; }
```

- *Type:* string

---

##### `SuccessTopicInput`<sup>Optional</sup> <a name="SuccessTopicInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput"></a>

```csharp
public string SuccessTopicInput { get; }
```

- *Type:* string

---

##### `ErrorTopic`<sup>Required</sup> <a name="ErrorTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```csharp
public string ErrorTopic { get; }
```

- *Type:* string

---

##### `SuccessTopic`<sup>Required</sup> <a name="SuccessTopic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```csharp
public string SuccessTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath">ResetS3FailurePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath">ResetS3OutputPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig"></a>

```csharp
private void PutNotificationConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig"></a>

```csharp
private void ResetNotificationConfig()
```

##### `ResetS3FailurePath` <a name="ResetS3FailurePath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath"></a>

```csharp
private void ResetS3FailurePath()
```

##### `ResetS3OutputPath` <a name="ResetS3OutputPath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath"></a>

```csharp
private void ResetS3OutputPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput">NotificationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput">S3FailurePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">S3FailurePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig NotificationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `S3FailurePathInput`<sup>Optional</sup> <a name="S3FailurePathInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput"></a>

```csharp
public string S3FailurePathInput { get; }
```

- *Type:* string

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput"></a>

```csharp
public string S3OutputPathInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `S3FailurePath`<sup>Required</sup> <a name="S3FailurePath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```csharp
public string S3FailurePath { get; }
```

- *Type:* string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig">PutClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetClientConfig">ResetClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetOutputConfig">ResetOutputConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfig` <a name="PutClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig"></a>

```csharp
private void PutClientConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig"></a>

```csharp
private void PutOutputConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---

##### `ResetClientConfig` <a name="ResetClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetClientConfig"></a>

```csharp
private void ResetClientConfig()
```

##### `ResetOutputConfig` <a name="ResetOutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetOutputConfig"></a>

```csharp
private void ResetOutputConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfigInput">ClientConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfigInput">OutputConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference ClientConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `ClientConfigInput`<sup>Optional</sup> <a name="ClientConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig ClientConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig OutputConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsDestinationsList <a name="SagemakerInferenceRouterRoutingTargetsDestinationsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get"></a>

```csharp
private SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>[]

---


### SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference <a name="SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>

---


### SagemakerInferenceRouterRoutingTargetsList <a name="SagemakerInferenceRouterRoutingTargetsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get"></a>

```csharp
private SagemakerInferenceRouterRoutingTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>[]

---


### SagemakerInferenceRouterRoutingTargetsOutputReference <a name="SagemakerInferenceRouterRoutingTargetsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterRoutingTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig">PutAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetAsyncInferenceConfig">ResetAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetRoutingPreference">ResetRoutingPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAsyncInferenceConfig` <a name="PutAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig"></a>

```csharp
private void PutAsyncInferenceConfig(SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|SagemakerInferenceRouterRoutingTargetsDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>[]

---

##### `ResetAsyncInferenceConfig` <a name="ResetAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetAsyncInferenceConfig"></a>

```csharp
private void ResetAsyncInferenceConfig()
```

##### `ResetRoutingPreference` <a name="ResetRoutingPreference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetRoutingPreference"></a>

```csharp
private void ResetRoutingPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList">SagemakerInferenceRouterRoutingTargetsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfigInput">AsyncInferenceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreferenceInput">RoutingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference">RoutingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AsyncInferenceConfig`<sup>Required</sup> <a name="AsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference AsyncInferenceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a>

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations"></a>

```csharp
public SagemakerInferenceRouterRoutingTargetsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList">SagemakerInferenceRouterRoutingTargetsDestinationsList</a>

---

##### `AsyncInferenceConfigInput`<sup>Optional</sup> <a name="AsyncInferenceConfigInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig AsyncInferenceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargetsDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoutingPreferenceInput`<sup>Optional</sup> <a name="RoutingPreferenceInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreferenceInput"></a>

```csharp
public string RoutingPreferenceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoutingPreference`<sup>Required</sup> <a name="RoutingPreference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference"></a>

```csharp
public string RoutingPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterRoutingTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>

---


### SagemakerInferenceRouterTagsList <a name="SagemakerInferenceRouterTagsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get"></a>

```csharp
private SagemakerInferenceRouterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>[]

---


### SagemakerInferenceRouterTagsOutputReference <a name="SagemakerInferenceRouterTagsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerInferenceRouterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceRouterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>

---



