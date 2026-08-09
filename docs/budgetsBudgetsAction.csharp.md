# `budgetsBudgetsAction` Submodule <a name="`budgetsBudgetsAction` Submodule" id="@cdktn/provider-awscc.budgetsBudgetsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudgetsAction <a name="BudgetsBudgetsAction" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action awscc_budgets_budgets_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsAction(Construct Scope, string Id, BudgetsBudgetsActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig">BudgetsBudgetsActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig">BudgetsBudgetsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold">PutActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition">PutDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers">PutSubscribers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel">ResetApprovalModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags">ResetResourceTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionThreshold` <a name="PutActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold"></a>

```csharp
private void PutActionThreshold(BudgetsBudgetsActionActionThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition"></a>

```csharp
private void PutDefinition(BudgetsBudgetsActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags"></a>

```csharp
private void PutResourceTags(IResolvable|BudgetsBudgetsActionResourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

---

##### `PutSubscribers` <a name="PutSubscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers"></a>

```csharp
private void PutSubscribers(IResolvable|BudgetsBudgetsActionSubscribers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

---

##### `ResetApprovalModel` <a name="ResetApprovalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel"></a>

```csharp
private void ResetApprovalModel()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BudgetsBudgetsAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BudgetsBudgetsAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BudgetsBudgetsAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BudgetsBudgetsAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BudgetsBudgetsAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BudgetsBudgetsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BudgetsBudgetsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold">ActionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers">Subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput">ActionThresholdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput">ApprovalModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput">BudgetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput">DefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput">NotificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput">SubscribersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel">ApprovalModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName">BudgetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `ActionThreshold`<sup>Required</sup> <a name="ActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold"></a>

```csharp
public BudgetsBudgetsActionActionThresholdOutputReference ActionThreshold { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a>

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition"></a>

```csharp
public BudgetsBudgetsActionDefinitionOutputReference Definition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags"></a>

```csharp
public BudgetsBudgetsActionResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a>

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers"></a>

```csharp
public BudgetsBudgetsActionSubscribersList Subscribers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a>

---

##### `ActionThresholdInput`<sup>Optional</sup> <a name="ActionThresholdInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput"></a>

```csharp
public IResolvable|BudgetsBudgetsActionActionThreshold ActionThresholdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `ApprovalModelInput`<sup>Optional</sup> <a name="ApprovalModelInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput"></a>

```csharp
public string ApprovalModelInput { get; }
```

- *Type:* string

---

##### `BudgetNameInput`<sup>Optional</sup> <a name="BudgetNameInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput"></a>

```csharp
public string BudgetNameInput { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinition DefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `NotificationTypeInput`<sup>Optional</sup> <a name="NotificationTypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput"></a>

```csharp
public string NotificationTypeInput { get; }
```

- *Type:* string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput"></a>

```csharp
public IResolvable|BudgetsBudgetsActionResourceTags[] ResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

---

##### `SubscribersInput`<sup>Optional</sup> <a name="SubscribersInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput"></a>

```csharp
public IResolvable|BudgetsBudgetsActionSubscribers[] SubscribersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `ApprovalModel`<sup>Required</sup> <a name="ApprovalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel"></a>

```csharp
public string ApprovalModel { get; }
```

- *Type:* string

---

##### `BudgetName`<sup>Required</sup> <a name="BudgetName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName"></a>

```csharp
public string BudgetName { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetsActionActionThreshold <a name="BudgetsBudgetsActionActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionActionThreshold {
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionConfig <a name="BudgetsBudgetsActionConfig" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BudgetsBudgetsActionActionThreshold ActionThreshold,
    string ActionType,
    string BudgetName,
    BudgetsBudgetsActionDefinition Definition,
    string ExecutionRoleArn,
    string NotificationType,
    IResolvable|BudgetsBudgetsActionSubscribers[] Subscribers,
    string ApprovalModel = null,
    IResolvable|BudgetsBudgetsActionResourceTags[] ResourceTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold">ActionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName">BudgetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType">NotificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers">Subscribers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel">ApprovalModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags">ResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionThreshold`<sup>Required</sup> <a name="ActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold"></a>

```csharp
public BudgetsBudgetsActionActionThreshold ActionThreshold { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}.

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}.

---

##### `BudgetName`<sup>Required</sup> <a name="BudgetName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName"></a>

```csharp
public string BudgetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}.

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition"></a>

```csharp
public BudgetsBudgetsActionDefinition Definition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}.

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}.

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType"></a>

```csharp
public string NotificationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}.

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers"></a>

```csharp
public IResolvable|BudgetsBudgetsActionSubscribers[] Subscribers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}.

---

##### `ApprovalModel`<sup>Optional</sup> <a name="ApprovalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel"></a>

```csharp
public string ApprovalModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}.

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags"></a>

```csharp
public IResolvable|BudgetsBudgetsActionResourceTags[] ResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}.

---

### BudgetsBudgetsActionDefinition <a name="BudgetsBudgetsActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinition {
    BudgetsBudgetsActionDefinitionIamActionDefinition IamActionDefinition = null,
    BudgetsBudgetsActionDefinitionScpActionDefinition ScpActionDefinition = null,
    BudgetsBudgetsActionDefinitionSsmActionDefinition SsmActionDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition">IamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition">ScpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition">SsmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}. |

---

##### `IamActionDefinition`<sup>Optional</sup> <a name="IamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition"></a>

```csharp
public BudgetsBudgetsActionDefinitionIamActionDefinition IamActionDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}.

---

##### `ScpActionDefinition`<sup>Optional</sup> <a name="ScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition"></a>

```csharp
public BudgetsBudgetsActionDefinitionScpActionDefinition ScpActionDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}.

---

##### `SsmActionDefinition`<sup>Optional</sup> <a name="SsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition"></a>

```csharp
public BudgetsBudgetsActionDefinitionSsmActionDefinition SsmActionDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}.

---

### BudgetsBudgetsActionDefinitionIamActionDefinition <a name="BudgetsBudgetsActionDefinitionIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinitionIamActionDefinition {
    string[] Groups = null,
    string PolicyArn = null,
    string[] Roles = null,
    string[] Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn">PolicyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles">Roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users">Users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}. |

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}.

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn"></a>

```csharp
public string PolicyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}.

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}.

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users"></a>

```csharp
public string[] Users { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}.

---

### BudgetsBudgetsActionDefinitionScpActionDefinition <a name="BudgetsBudgetsActionDefinitionScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinitionScpActionDefinition {
    string PolicyId = null,
    string[] TargetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds">TargetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}. |

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}.

---

##### `TargetIds`<sup>Optional</sup> <a name="TargetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds"></a>

```csharp
public string[] TargetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}.

---

### BudgetsBudgetsActionDefinitionSsmActionDefinition <a name="BudgetsBudgetsActionDefinitionSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinitionSsmActionDefinition {
    string[] InstanceIds = null,
    string Region = null,
    string Subtype = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds">InstanceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype">Subtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}. |

---

##### `InstanceIds`<sup>Optional</sup> <a name="InstanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds"></a>

```csharp
public string[] InstanceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}.

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}.

---

### BudgetsBudgetsActionResourceTags <a name="BudgetsBudgetsActionResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionResourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionSubscribers <a name="BudgetsBudgetsActionSubscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionSubscribers {
    string Address,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetsActionActionThresholdOutputReference <a name="BudgetsBudgetsActionActionThresholdOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionActionThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionActionThreshold InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---


### BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroups` <a name="ResetGroups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn"></a>

```csharp
private void ResetPolicyArn()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers"></a>

```csharp
private void ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput">PolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput">UsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput"></a>

```csharp
public string PolicyArnInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput"></a>

```csharp
public string[] UsersInput { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinitionIamActionDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition">PutIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition">PutScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition">PutSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition">ResetIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition">ResetScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition">ResetSsmActionDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamActionDefinition` <a name="PutIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition"></a>

```csharp
private void PutIamActionDefinition(BudgetsBudgetsActionDefinitionIamActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---

##### `PutScpActionDefinition` <a name="PutScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition"></a>

```csharp
private void PutScpActionDefinition(BudgetsBudgetsActionDefinitionScpActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---

##### `PutSsmActionDefinition` <a name="PutSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition"></a>

```csharp
private void PutSsmActionDefinition(BudgetsBudgetsActionDefinitionSsmActionDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---

##### `ResetIamActionDefinition` <a name="ResetIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition"></a>

```csharp
private void ResetIamActionDefinition()
```

##### `ResetScpActionDefinition` <a name="ResetScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition"></a>

```csharp
private void ResetScpActionDefinition()
```

##### `ResetSsmActionDefinition` <a name="ResetSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition"></a>

```csharp
private void ResetSsmActionDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition">IamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition">ScpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition">SsmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput">IamActionDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput">ScpActionDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput">SsmActionDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamActionDefinition`<sup>Required</sup> <a name="IamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition"></a>

```csharp
public BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference IamActionDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `ScpActionDefinition`<sup>Required</sup> <a name="ScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition"></a>

```csharp
public BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference ScpActionDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `SsmActionDefinition`<sup>Required</sup> <a name="SsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```csharp
public BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference SsmActionDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `IamActionDefinitionInput`<sup>Optional</sup> <a name="IamActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinitionIamActionDefinition IamActionDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---

##### `ScpActionDefinitionInput`<sup>Optional</sup> <a name="ScpActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinitionScpActionDefinition ScpActionDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---

##### `SsmActionDefinitionInput`<sup>Optional</sup> <a name="SsmActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinitionSsmActionDefinition SsmActionDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds">ResetTargetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetTargetIds` <a name="ResetTargetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds"></a>

```csharp
private void ResetTargetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput">TargetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput"></a>

```csharp
public string[] TargetIdsInput { get; }
```

- *Type:* string[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinitionScpActionDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds">ResetInstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceIds` <a name="ResetInstanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds"></a>

```csharp
private void ResetInstanceIds()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype"></a>

```csharp
private void ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput">InstanceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">InstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceIdsInput`<sup>Optional</sup> <a name="InstanceIdsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput"></a>

```csharp
public string[] InstanceIdsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `InstanceIds`<sup>Required</sup> <a name="InstanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```csharp
public string[] InstanceIds { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionDefinitionSsmActionDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---


### BudgetsBudgetsActionResourceTagsList <a name="BudgetsBudgetsActionResourceTagsList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get"></a>

```csharp
private BudgetsBudgetsActionResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionResourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

---


### BudgetsBudgetsActionResourceTagsOutputReference <a name="BudgetsBudgetsActionResourceTagsOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionResourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>

---


### BudgetsBudgetsActionSubscribersList <a name="BudgetsBudgetsActionSubscribersList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionSubscribersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get"></a>

```csharp
private BudgetsBudgetsActionSubscribersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionSubscribers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

---


### BudgetsBudgetsActionSubscribersOutputReference <a name="BudgetsBudgetsActionSubscribersOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BudgetsBudgetsActionSubscribersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BudgetsBudgetsActionSubscribers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>

---



