# `applicationautoscalingScalableTarget` Submodule <a name="`applicationautoscalingScalableTarget` Submodule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationautoscalingScalableTarget <a name="ApplicationautoscalingScalableTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTarget(Construct Scope, string Id, ApplicationautoscalingScalableTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig">ApplicationautoscalingScalableTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig">ApplicationautoscalingScalableTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions">PutScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState">PutSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetScheduledActions">ResetScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetSuspendedState">ResetSuspendedState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduledActions` <a name="PutScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions"></a>

```csharp
private void PutScheduledActions(IResolvable|ApplicationautoscalingScalableTargetScheduledActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>[]

---

##### `PutSuspendedState` <a name="PutSuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState"></a>

```csharp
private void PutSuspendedState(ApplicationautoscalingScalableTargetSuspendedState Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetScheduledActions` <a name="ResetScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetScheduledActions"></a>

```csharp
private void ResetScheduledActions()
```

##### `ResetSuspendedState` <a name="ResetSuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetSuspendedState"></a>

```csharp
private void ResetSuspendedState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationautoscalingScalableTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationautoscalingScalableTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationautoscalingScalableTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationautoscalingScalableTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationautoscalingScalableTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationautoscalingScalableTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationautoscalingScalableTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableTargetId">ScalableTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActions">ScheduledActions</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList">ApplicationautoscalingScalableTargetScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedState">SuspendedState</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference">ApplicationautoscalingScalableTargetSuspendedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimensionInput">ScalableDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActionsInput">ScheduledActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespaceInput">ServiceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedStateInput">SuspendedStateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScalableTargetId`<sup>Required</sup> <a name="ScalableTargetId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableTargetId"></a>

```csharp
public string ScalableTargetId { get; }
```

- *Type:* string

---

##### `ScheduledActions`<sup>Required</sup> <a name="ScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActions"></a>

```csharp
public ApplicationautoscalingScalableTargetScheduledActionsList ScheduledActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList">ApplicationautoscalingScalableTargetScheduledActionsList</a>

---

##### `SuspendedState`<sup>Required</sup> <a name="SuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedState"></a>

```csharp
public ApplicationautoscalingScalableTargetSuspendedStateOutputReference SuspendedState { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference">ApplicationautoscalingScalableTargetSuspendedStateOutputReference</a>

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ScalableDimensionInput`<sup>Optional</sup> <a name="ScalableDimensionInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimensionInput"></a>

```csharp
public string ScalableDimensionInput { get; }
```

- *Type:* string

---

##### `ScheduledActionsInput`<sup>Optional</sup> <a name="ScheduledActionsInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActionsInput"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetScheduledActions[] ScheduledActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>[]

---

##### `ServiceNamespaceInput`<sup>Optional</sup> <a name="ServiceNamespaceInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespaceInput"></a>

```csharp
public string ServiceNamespaceInput { get; }
```

- *Type:* string

---

##### `SuspendedStateInput`<sup>Optional</sup> <a name="SuspendedStateInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedStateInput"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetSuspendedState SuspendedStateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; }
```

- *Type:* string

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationautoscalingScalableTargetConfig <a name="ApplicationautoscalingScalableTargetConfig" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double MaxCapacity,
    double MinCapacity,
    string ResourceId,
    string ScalableDimension,
    string ServiceNamespace,
    string RoleArn = null,
    IResolvable|ApplicationautoscalingScalableTargetScheduledActions[] ScheduledActions = null,
    ApplicationautoscalingScalableTargetSuspendedState SuspendedState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | The maximum value that you plan to scale out to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.minCapacity">MinCapacity</a></code> | <code>double</code> | The minimum value that you plan to scale in to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | The identifier of the resource associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | The scalable dimension associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | The namespace of the AWS service that provides the resource, or a ``custom-resource``. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scheduledActions">ScheduledActions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>[]</code> | The scheduled actions for the scalable target. Duplicates aren't allowed. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.suspendedState">SuspendedState</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

The maximum value that you plan to scale out to.

When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

The minimum value that you plan to scale in to.

When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The identifier of the resource associated with the scalable target.

This string consists of the resource type and unique identifier.

* ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
* Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
* EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
* AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
* DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
* DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
* Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
* SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
* Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).
* Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
* Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
* Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
* Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
* Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
* Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
* Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
* Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
* SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
* SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
* Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#resource_id ApplicationautoscalingScalableTarget#resource_id}

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; set; }
```

- *Type:* string

The scalable dimension associated with the scalable target.

This string consists of the service namespace, resource type, and scaling property.

* `ecs:service:DesiredCount` - The task count of an ECS service.
* `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
* `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
* `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
* `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
* `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
* `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
* `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
* `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
* `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
* `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
* `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
* `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
* `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
* `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
* `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
* `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
* `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
* `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
* `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
* `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
* `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
* `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
* `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#scalable_dimension ApplicationautoscalingScalableTarget#scalable_dimension}

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; set; }
```

- *Type:* string

The namespace of the AWS service that provides the resource, or a ``custom-resource``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#service_namespace ApplicationautoscalingScalableTarget#service_namespace}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.

This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide*.
To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#role_arn ApplicationautoscalingScalableTarget#role_arn}

---

##### `ScheduledActions`<sup>Optional</sup> <a name="ScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scheduledActions"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetScheduledActions[] ScheduledActions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>[]

The scheduled actions for the scalable target. Duplicates aren't allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#scheduled_actions ApplicationautoscalingScalableTarget#scheduled_actions}

---

##### `SuspendedState`<sup>Optional</sup> <a name="SuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.suspendedState"></a>

```csharp
public ApplicationautoscalingScalableTargetSuspendedState SuspendedState { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling.

Setting the value of an attribute to `true` suspends the specified scaling activities. Setting it to `false` (default) resumes the specified scaling activities.
*Suspension Outcomes*

* For `DynamicScalingInSuspended`, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
* For `DynamicScalingOutSuspended`, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
* For `ScheduledScalingSuspended`, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#suspended_state ApplicationautoscalingScalableTarget#suspended_state}

---

### ApplicationautoscalingScalableTargetScheduledActions <a name="ApplicationautoscalingScalableTargetScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetScheduledActions {
    string EndTime = null,
    ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction ScalableTargetAction = null,
    string Schedule = null,
    string ScheduledActionName = null,
    string StartTime = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.endTime">EndTime</a></code> | <code>string</code> | The date and time that the action is scheduled to end, in UTC. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scalableTargetAction">ScalableTargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | The new minimum and maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.schedule">Schedule</a></code> | <code>string</code> | The schedule for this action. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scheduledActionName">ScheduledActionName</a></code> | <code>string</code> | The name of the scheduled action. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.startTime">StartTime</a></code> | <code>string</code> | The date and time that the action is scheduled to begin, in UTC. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.timezone">Timezone</a></code> | <code>string</code> | The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The date and time that the action is scheduled to end, in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#end_time ApplicationautoscalingScalableTarget#end_time}

---

##### `ScalableTargetAction`<sup>Optional</sup> <a name="ScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scalableTargetAction"></a>

```csharp
public ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction ScalableTargetAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

The new minimum and maximum capacity.

You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#scalable_target_action ApplicationautoscalingScalableTarget#scalable_target_action}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

The schedule for this action.

The following formats are supported:

* At expressions - "`at(yyyy-mm-ddThh:mm:ss)`"
* Rate expressions - "`rate(valueunit)`"
* Cron expressions - "`cron(fields)`"

At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
At and cron expressions use Universal Coordinated Time (UTC) by default.
The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
For rate expressions, *value* is a positive integer and *unit* is `minute` | `minutes` | `hour` | `hours` | `day` | `days`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#schedule ApplicationautoscalingScalableTarget#schedule}

---

##### `ScheduledActionName`<sup>Optional</sup> <a name="ScheduledActionName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scheduledActionName"></a>

```csharp
public string ScheduledActionName { get; set; }
```

- *Type:* string

The name of the scheduled action.

This name must be unique among all other scheduled actions on the specified scalable target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#scheduled_action_name ApplicationautoscalingScalableTarget#scheduled_action_name}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The date and time that the action is scheduled to begin, in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#start_time ApplicationautoscalingScalableTarget#start_time}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#timezone ApplicationautoscalingScalableTarget#timezone}

---

### ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction <a name="ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction {
    double MaxCapacity = null,
    double MinCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | The maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.minCapacity">MinCapacity</a></code> | <code>double</code> | The minimum capacity. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

The maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

The minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

### ApplicationautoscalingScalableTargetSuspendedState <a name="ApplicationautoscalingScalableTargetSuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetSuspendedState {
    bool|IResolvable DynamicScalingInSuspended = null,
    bool|IResolvable DynamicScalingOutSuspended = null,
    bool|IResolvable ScheduledScalingSuspended = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingInSuspended">DynamicScalingInSuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingOutSuspended">DynamicScalingOutSuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.scheduledScalingSuspended">ScheduledScalingSuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether scheduled scaling is suspended. |

---

##### `DynamicScalingInSuspended`<sup>Optional</sup> <a name="DynamicScalingInSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingInSuspended"></a>

```csharp
public bool|IResolvable DynamicScalingInSuspended { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether scale in by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_in_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_in_suspended}

---

##### `DynamicScalingOutSuspended`<sup>Optional</sup> <a name="DynamicScalingOutSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingOutSuspended"></a>

```csharp
public bool|IResolvable DynamicScalingOutSuspended { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether scale out by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_out_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_out_suspended}

---

##### `ScheduledScalingSuspended`<sup>Optional</sup> <a name="ScheduledScalingSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.scheduledScalingSuspended"></a>

```csharp
public bool|IResolvable ScheduledScalingSuspended { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether scheduled scaling is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationautoscaling_scalable_target#scheduled_scaling_suspended ApplicationautoscalingScalableTarget#scheduled_scaling_suspended}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationautoscalingScalableTargetScheduledActionsList <a name="ApplicationautoscalingScalableTargetScheduledActionsList" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetScheduledActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get"></a>

```csharp
private ApplicationautoscalingScalableTargetScheduledActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.internalValue"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetScheduledActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>[]

---


### ApplicationautoscalingScalableTargetScheduledActionsOutputReference <a name="ApplicationautoscalingScalableTargetScheduledActionsOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetScheduledActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction">PutScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScalableTargetAction">ResetScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScheduledActionName">ResetScheduledActionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScalableTargetAction` <a name="PutScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction"></a>

```csharp
private void PutScalableTargetAction(ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetScalableTargetAction` <a name="ResetScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScalableTargetAction"></a>

```csharp
private void ResetScalableTargetAction()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetScheduledActionName` <a name="ResetScheduledActionName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScheduledActionName"></a>

```csharp
private void ResetScheduledActionName()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction">ScalableTargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetActionInput">ScalableTargetActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionNameInput">ScheduledActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName">ScheduledActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScalableTargetAction`<sup>Required</sup> <a name="ScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction"></a>

```csharp
public ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference ScalableTargetAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `ScalableTargetActionInput`<sup>Optional</sup> <a name="ScalableTargetActionInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetActionInput"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction ScalableTargetActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---

##### `ScheduledActionNameInput`<sup>Optional</sup> <a name="ScheduledActionNameInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionNameInput"></a>

```csharp
public string ScheduledActionNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `ScheduledActionName`<sup>Required</sup> <a name="ScheduledActionName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName"></a>

```csharp
public string ScheduledActionName { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetScheduledActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>

---


### ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference <a name="ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---


### ApplicationautoscalingScalableTargetSuspendedStateOutputReference <a name="ApplicationautoscalingScalableTargetSuspendedStateOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationautoscalingScalableTargetSuspendedStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended">ResetDynamicScalingInSuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended">ResetDynamicScalingOutSuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetScheduledScalingSuspended">ResetScheduledScalingSuspended</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicScalingInSuspended` <a name="ResetDynamicScalingInSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended"></a>

```csharp
private void ResetDynamicScalingInSuspended()
```

##### `ResetDynamicScalingOutSuspended` <a name="ResetDynamicScalingOutSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended"></a>

```csharp
private void ResetDynamicScalingOutSuspended()
```

##### `ResetScheduledScalingSuspended` <a name="ResetScheduledScalingSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetScheduledScalingSuspended"></a>

```csharp
private void ResetScheduledScalingSuspended()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput">DynamicScalingInSuspendedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput">DynamicScalingOutSuspendedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput">ScheduledScalingSuspendedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended">DynamicScalingInSuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended">DynamicScalingOutSuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended">ScheduledScalingSuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicScalingInSuspendedInput`<sup>Optional</sup> <a name="DynamicScalingInSuspendedInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput"></a>

```csharp
public bool|IResolvable DynamicScalingInSuspendedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DynamicScalingOutSuspendedInput`<sup>Optional</sup> <a name="DynamicScalingOutSuspendedInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput"></a>

```csharp
public bool|IResolvable DynamicScalingOutSuspendedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScheduledScalingSuspendedInput`<sup>Optional</sup> <a name="ScheduledScalingSuspendedInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput"></a>

```csharp
public bool|IResolvable ScheduledScalingSuspendedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DynamicScalingInSuspended`<sup>Required</sup> <a name="DynamicScalingInSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended"></a>

```csharp
public bool|IResolvable DynamicScalingInSuspended { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DynamicScalingOutSuspended`<sup>Required</sup> <a name="DynamicScalingOutSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended"></a>

```csharp
public bool|IResolvable DynamicScalingOutSuspended { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScheduledScalingSuspended`<sup>Required</sup> <a name="ScheduledScalingSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended"></a>

```csharp
public bool|IResolvable ScheduledScalingSuspended { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationautoscalingScalableTargetSuspendedState InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---



