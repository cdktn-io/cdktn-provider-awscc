# `autoscalingWarmPool` Submodule <a name="`autoscalingWarmPool` Submodule" id="@cdktn/provider-awscc.autoscalingWarmPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingWarmPool <a name="AutoscalingWarmPool" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool awscc_autoscaling_warm_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingWarmPool(Construct Scope, string Id, AutoscalingWarmPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig">AutoscalingWarmPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig">AutoscalingWarmPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy">PutInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetInstanceReusePolicy">ResetInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMaxGroupPreparedCapacity">ResetMaxGroupPreparedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetPoolState">ResetPoolState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceReusePolicy` <a name="PutInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy"></a>

```csharp
private void PutInstanceReusePolicy(AutoscalingWarmPoolInstanceReusePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---

##### `ResetInstanceReusePolicy` <a name="ResetInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetInstanceReusePolicy"></a>

```csharp
private void ResetInstanceReusePolicy()
```

##### `ResetMaxGroupPreparedCapacity` <a name="ResetMaxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMaxGroupPreparedCapacity"></a>

```csharp
private void ResetMaxGroupPreparedCapacity()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetPoolState` <a name="ResetPoolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetPoolState"></a>

```csharp
private void ResetPoolState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingWarmPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingWarmPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingWarmPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingWarmPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AutoscalingWarmPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AutoscalingWarmPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingWarmPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingWarmPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingWarmPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicy">InstanceReusePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference">AutoscalingWarmPoolInstanceReusePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupNameInput">AutoScalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicyInput">InstanceReusePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacityInput">MaxGroupPreparedCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolStateInput">PoolStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupName">AutoScalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacity">MaxGroupPreparedCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolState">PoolState</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceReusePolicy`<sup>Required</sup> <a name="InstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicy"></a>

```csharp
public AutoscalingWarmPoolInstanceReusePolicyOutputReference InstanceReusePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference">AutoscalingWarmPoolInstanceReusePolicyOutputReference</a>

---

##### `AutoScalingGroupNameInput`<sup>Optional</sup> <a name="AutoScalingGroupNameInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupNameInput"></a>

```csharp
public string AutoScalingGroupNameInput { get; }
```

- *Type:* string

---

##### `InstanceReusePolicyInput`<sup>Optional</sup> <a name="InstanceReusePolicyInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicyInput"></a>

```csharp
public IResolvable|AutoscalingWarmPoolInstanceReusePolicy InstanceReusePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---

##### `MaxGroupPreparedCapacityInput`<sup>Optional</sup> <a name="MaxGroupPreparedCapacityInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacityInput"></a>

```csharp
public double MaxGroupPreparedCapacityInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `PoolStateInput`<sup>Optional</sup> <a name="PoolStateInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolStateInput"></a>

```csharp
public string PoolStateInput { get; }
```

- *Type:* string

---

##### `AutoScalingGroupName`<sup>Required</sup> <a name="AutoScalingGroupName" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupName"></a>

```csharp
public string AutoScalingGroupName { get; }
```

- *Type:* string

---

##### `MaxGroupPreparedCapacity`<sup>Required</sup> <a name="MaxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacity"></a>

```csharp
public double MaxGroupPreparedCapacity { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `PoolState`<sup>Required</sup> <a name="PoolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolState"></a>

```csharp
public string PoolState { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingWarmPoolConfig <a name="AutoscalingWarmPoolConfig" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingWarmPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutoScalingGroupName,
    AutoscalingWarmPoolInstanceReusePolicy InstanceReusePolicy = null,
    double MaxGroupPreparedCapacity = null,
    double MinSize = null,
    string PoolState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.autoScalingGroupName">AutoScalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.instanceReusePolicy">InstanceReusePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.maxGroupPreparedCapacity">MaxGroupPreparedCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.poolState">PoolState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoScalingGroupName`<sup>Required</sup> <a name="AutoScalingGroupName" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.autoScalingGroupName"></a>

```csharp
public string AutoScalingGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}.

---

##### `InstanceReusePolicy`<sup>Optional</sup> <a name="InstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.instanceReusePolicy"></a>

```csharp
public AutoscalingWarmPoolInstanceReusePolicy InstanceReusePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}.

---

##### `MaxGroupPreparedCapacity`<sup>Optional</sup> <a name="MaxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.maxGroupPreparedCapacity"></a>

```csharp
public double MaxGroupPreparedCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}.

---

##### `PoolState`<sup>Optional</sup> <a name="PoolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.poolState"></a>

```csharp
public string PoolState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}.

---

### AutoscalingWarmPoolInstanceReusePolicy <a name="AutoscalingWarmPoolInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingWarmPoolInstanceReusePolicy {
    bool|IResolvable ReuseOnScaleIn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.property.reuseOnScaleIn">ReuseOnScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#reuse_on_scale_in AutoscalingWarmPool#reuse_on_scale_in}. |

---

##### `ReuseOnScaleIn`<sup>Optional</sup> <a name="ReuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.property.reuseOnScaleIn"></a>

```csharp
public bool|IResolvable ReuseOnScaleIn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#reuse_on_scale_in AutoscalingWarmPool#reuse_on_scale_in}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingWarmPoolInstanceReusePolicyOutputReference <a name="AutoscalingWarmPoolInstanceReusePolicyOutputReference" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AutoscalingWarmPoolInstanceReusePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn">ResetReuseOnScaleIn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReuseOnScaleIn` <a name="ResetReuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn"></a>

```csharp
private void ResetReuseOnScaleIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput">ReuseOnScaleInInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn">ReuseOnScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReuseOnScaleInInput`<sup>Optional</sup> <a name="ReuseOnScaleInInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput"></a>

```csharp
public bool|IResolvable ReuseOnScaleInInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReuseOnScaleIn`<sup>Required</sup> <a name="ReuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn"></a>

```csharp
public bool|IResolvable ReuseOnScaleIn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AutoscalingWarmPoolInstanceReusePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---



