# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktn/provider-awscc.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger awscc_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTrigger(Construct Scope, string Id, GlueTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition">PutEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition">ResetEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate">ResetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation">ResetStartOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions"></a>

```csharp
private void PutActions(IResolvable|GlueTriggerActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---

##### `PutEventBatchingCondition` <a name="PutEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition"></a>

```csharp
private void PutEventBatchingCondition(GlueTriggerEventBatchingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate"></a>

```csharp
private void PutPredicate(GlueTriggerPredicate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventBatchingCondition` <a name="ResetEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition"></a>

```csharp
private void ResetEventBatchingCondition()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPredicate` <a name="ResetPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate"></a>

```csharp
private void ResetPredicate()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStartOnCreation` <a name="ResetStartOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```csharp
private void ResetStartOnCreation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```csharp
private void ResetWorkflowName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate">Predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput">EventBatchingConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput">PredicateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput">StartOnCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation">StartOnCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions"></a>

```csharp
public GlueTriggerActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `EventBatchingCondition`<sup>Required</sup> <a name="EventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition"></a>

```csharp
public GlueTriggerEventBatchingConditionOutputReference EventBatchingCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate"></a>

```csharp
public GlueTriggerPredicateOutputReference Predicate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput"></a>

```csharp
public IResolvable|GlueTriggerActions[] ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventBatchingConditionInput`<sup>Optional</sup> <a name="EventBatchingConditionInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput"></a>

```csharp
public IResolvable|GlueTriggerEventBatchingCondition EventBatchingConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput"></a>

```csharp
public IResolvable|GlueTriggerPredicate PredicateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `StartOnCreationInput`<sup>Optional</sup> <a name="StartOnCreationInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```csharp
public bool|IResolvable StartOnCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartOnCreation`<sup>Required</sup> <a name="StartOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```csharp
public bool|IResolvable StartOnCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerActions {
    string Arguments = null,
    string CrawlerName = null,
    string JobName = null,
    GlueTriggerActionsNotificationProperty NotificationProperty = null,
    string SecurityConfiguration = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments">Arguments</a></code> | <code>string</code> | The job arguments used when this trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName">CrawlerName</a></code> | <code>string</code> | The name of the crawler to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName">JobName</a></code> | <code>string</code> | The name of a job to be executed. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | Specifies configuration properties of a job run notification. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | The name of the SecurityConfiguration structure to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout">Timeout</a></code> | <code>double</code> | The JobRun timeout in minutes. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments"></a>

```csharp
public string Arguments { get; set; }
```

- *Type:* string

The job arguments used when this trigger fires.

For this job run, they replace the default arguments set in the job definition itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#arguments GlueTrigger#arguments}

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```csharp
public string CrawlerName { get; set; }
```

- *Type:* string

The name of the crawler to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

The name of a job to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```csharp
public GlueTriggerActionsNotificationProperty NotificationProperty { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

Specifies configuration properties of a job run notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; set; }
```

- *Type:* string

The name of the SecurityConfiguration structure to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#security_configuration GlueTrigger#security_configuration}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The JobRun timeout in minutes.

This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#timeout GlueTrigger#timeout}

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerActionsNotificationProperty {
    double NotifyDelayAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | After a job run starts, the number of minutes to wait before sending a job run delay notification. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; set; }
```

- *Type:* double

After a job run starts, the number of minutes to wait before sending a job run delay notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GlueTriggerActions[] Actions,
    string Type,
    string Description = null,
    GlueTriggerEventBatchingCondition EventBatchingCondition = null,
    string Name = null,
    GlueTriggerPredicate Predicate = null,
    string Schedule = null,
    bool|IResolvable StartOnCreation = null,
    string Tags = null,
    string WorkflowName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions">Actions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | The actions initiated by this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type">Type</a></code> | <code>string</code> | The type of trigger that this is. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description">Description</a></code> | <code>string</code> | A description of this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name">Name</a></code> | <code>string</code> | The name of the trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | The predicate of this trigger, which defines when it will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule">Schedule</a></code> | <code>string</code> | A cron expression used to specify the schedule. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation">StartOnCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags">Tags</a></code> | <code>string</code> | The tags to use with this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName">WorkflowName</a></code> | <code>string</code> | The name of the workflow associated with the trigger. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions"></a>

```csharp
public IResolvable|GlueTriggerActions[] Actions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

The actions initiated by this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#actions GlueTrigger#actions}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of trigger that this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#type GlueTrigger#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#description GlueTrigger#description}

---

##### `EventBatchingCondition`<sup>Optional</sup> <a name="EventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition"></a>

```csharp
public GlueTriggerEventBatchingCondition EventBatchingCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#name GlueTrigger#name}

---

##### `Predicate`<sup>Optional</sup> <a name="Predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```csharp
public GlueTriggerPredicate Predicate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

The predicate of this trigger, which defines when it will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#predicate GlueTrigger#predicate}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

A cron expression used to specify the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#schedule GlueTrigger#schedule}

---

##### `StartOnCreation`<sup>Optional</sup> <a name="StartOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```csharp
public bool|IResolvable StartOnCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

The tags to use with this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#tags GlueTrigger#tags}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

The name of the workflow associated with the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}

---

### GlueTriggerEventBatchingCondition <a name="GlueTriggerEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerEventBatchingCondition {
    double BatchSize = null,
    double BatchWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize">BatchSize</a></code> | <code>double</code> | Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow">BatchWindow</a></code> | <code>double</code> | Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received. |

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#batch_size GlueTrigger#batch_size}

---

##### `BatchWindow`<sup>Optional</sup> <a name="BatchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow"></a>

```csharp
public double BatchWindow { get; set; }
```

- *Type:* double

Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#batch_window GlueTrigger#batch_window}

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerPredicate {
    IResolvable|GlueTriggerPredicateConditions[] Conditions = null,
    string Logical = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | A list of the conditions that determine when the trigger will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical">Logical</a></code> | <code>string</code> | An optional field if only one condition is listed. If multiple conditions are listed, then this field is required. |

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```csharp
public IResolvable|GlueTriggerPredicateConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

A list of the conditions that determine when the trigger will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#conditions GlueTrigger#conditions}

---

##### `Logical`<sup>Optional</sup> <a name="Logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```csharp
public string Logical { get; set; }
```

- *Type:* string

An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#logical GlueTrigger#logical}

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerPredicateConditions {
    string CrawlerName = null,
    string CrawlState = null,
    string JobName = null,
    string LogicalOperator = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">CrawlerName</a></code> | <code>string</code> | The name of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">CrawlState</a></code> | <code>string</code> | The state of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName">JobName</a></code> | <code>string</code> | The name of the job whose JobRuns this condition applies to, and on which this trigger waits. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | A logical operator. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state">State</a></code> | <code>string</code> | The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED. |

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```csharp
public string CrawlerName { get; set; }
```

- *Type:* string

The name of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `CrawlState`<sup>Optional</sup> <a name="CrawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```csharp
public string CrawlState { get; set; }
```

- *Type:* string

The state of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#crawl_state GlueTrigger#crawl_state}

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

The name of the job whose JobRuns this condition applies to, and on which this trigger waits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `LogicalOperator`<sup>Optional</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; set; }
```

- *Type:* string

A logical operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#logical_operator GlueTrigger#logical_operator}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#state GlueTrigger#state}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get"></a>

```csharp
private GlueTriggerActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```csharp
public IResolvable|GlueTriggerActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerActionsNotificationPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```csharp
private void ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```csharp
public double NotifyDelayAfterInput { get; }
```

- *Type:* double

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTriggerActionsNotificationProperty InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```csharp
private void PutNotificationProperty(GlueTriggerActionsNotificationProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```csharp
private void ResetCrawlerName()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```csharp
private void ResetJobName()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```csharp
private void ResetNotificationProperty()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```csharp
private void ResetSecurityConfiguration()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">Arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```csharp
public GlueTriggerActionsNotificationPropertyOutputReference NotificationProperty { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```csharp
public string ArgumentsInput { get; }
```

- *Type:* string

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```csharp
public string CrawlerNameInput { get; }
```

- *Type:* string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```csharp
public IResolvable|GlueTriggerActionsNotificationProperty NotificationPropertyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```csharp
public string SecurityConfigurationInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```csharp
public string Arguments { get; }
```

- *Type:* string

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```csharp
public string CrawlerName { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTriggerActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>

---


### GlueTriggerEventBatchingConditionOutputReference <a name="GlueTriggerEventBatchingConditionOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerEventBatchingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow">ResetBatchWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetBatchWindow` <a name="ResetBatchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow"></a>

```csharp
private void ResetBatchWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput">BatchWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow">BatchWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `BatchWindowInput`<sup>Optional</sup> <a name="BatchWindowInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput"></a>

```csharp
public double BatchWindowInput { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `BatchWindow`<sup>Required</sup> <a name="BatchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow"></a>

```csharp
public double BatchWindow { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTriggerEventBatchingCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerPredicateConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```csharp
private GlueTriggerPredicateConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```csharp
public IResolvable|GlueTriggerPredicateConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerPredicateConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">ResetCrawlState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">ResetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```csharp
private void ResetCrawlerName()
```

##### `ResetCrawlState` <a name="ResetCrawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```csharp
private void ResetCrawlState()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```csharp
private void ResetJobName()
```

##### `ResetLogicalOperator` <a name="ResetLogicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```csharp
private void ResetLogicalOperator()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">CrawlStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">CrawlState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```csharp
public string CrawlerNameInput { get; }
```

- *Type:* string

---

##### `CrawlStateInput`<sup>Optional</sup> <a name="CrawlStateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```csharp
public string CrawlStateInput { get; }
```

- *Type:* string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```csharp
public string LogicalOperatorInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```csharp
public string CrawlerName { get; }
```

- *Type:* string

---

##### `CrawlState`<sup>Required</sup> <a name="CrawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```csharp
public string CrawlState { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTriggerPredicateConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTriggerPredicateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">ResetLogical</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|GlueTriggerPredicateConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetLogical` <a name="ResetLogical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```csharp
private void ResetLogical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">LogicalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">Logical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```csharp
public GlueTriggerPredicateConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|GlueTriggerPredicateConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---

##### `LogicalInput`<sup>Optional</sup> <a name="LogicalInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```csharp
public string LogicalInput { get; }
```

- *Type:* string

---

##### `Logical`<sup>Required</sup> <a name="Logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```csharp
public string Logical { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTriggerPredicate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---



