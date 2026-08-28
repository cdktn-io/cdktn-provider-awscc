# `backupRestoreTestingPlan` Submodule <a name="`backupRestoreTestingPlan` Submodule" id="@cdktn/provider-awscc.backupRestoreTestingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingPlan <a name="BackupRestoreTestingPlan" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan awscc_backup_restore_testing_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupRestoreTestingPlan(Construct Scope, string Id, BackupRestoreTestingPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection">PutRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours">ResetStartWindowHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecoveryPointSelection` <a name="PutRecoveryPointSelection" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection"></a>

```csharp
private void PutRecoveryPointSelection(BackupRestoreTestingPlanRecoveryPointSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.putTags"></a>

```csharp
private void PutTags(IResolvable|BackupRestoreTestingPlanTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>[]

---

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone"></a>

```csharp
private void ResetScheduleExpressionTimezone()
```

##### `ResetStartWindowHours` <a name="ResetStartWindowHours" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours"></a>

```csharp
private void ResetStartWindowHours()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupRestoreTestingPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupRestoreTestingPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupRestoreTestingPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupRestoreTestingPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupRestoreTestingPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupRestoreTestingPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupRestoreTestingPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupRestoreTestingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference">BackupRestoreTestingPlanRecoveryPointSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.restoreTestingPlanArn">RestoreTestingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList">BackupRestoreTestingPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput">RecoveryPointSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.restoreTestingPlanNameInput">RestoreTestingPlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput">StartWindowHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.restoreTestingPlanName">RestoreTestingPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours">StartWindowHours</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection"></a>

```csharp
public BackupRestoreTestingPlanRecoveryPointSelectionOutputReference RecoveryPointSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference">BackupRestoreTestingPlanRecoveryPointSelectionOutputReference</a>

---

##### `RestoreTestingPlanArn`<sup>Required</sup> <a name="RestoreTestingPlanArn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.restoreTestingPlanArn"></a>

```csharp
public string RestoreTestingPlanArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags"></a>

```csharp
public BackupRestoreTestingPlanTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList">BackupRestoreTestingPlanTagsList</a>

---

##### `RecoveryPointSelectionInput`<sup>Optional</sup> <a name="RecoveryPointSelectionInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput"></a>

```csharp
public IResolvable|BackupRestoreTestingPlanRecoveryPointSelection RecoveryPointSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>

---

##### `RestoreTestingPlanNameInput`<sup>Optional</sup> <a name="RestoreTestingPlanNameInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.restoreTestingPlanNameInput"></a>

```csharp
public string RestoreTestingPlanNameInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput"></a>

```csharp
public string ScheduleExpressionTimezoneInput { get; }
```

- *Type:* string

---

##### `StartWindowHoursInput`<sup>Optional</sup> <a name="StartWindowHoursInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput"></a>

```csharp
public double StartWindowHoursInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput"></a>

```csharp
public IResolvable|BackupRestoreTestingPlanTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>[]

---

##### `RestoreTestingPlanName`<sup>Required</sup> <a name="RestoreTestingPlanName" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.restoreTestingPlanName"></a>

```csharp
public string RestoreTestingPlanName { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; }
```

- *Type:* string

---

##### `StartWindowHours`<sup>Required</sup> <a name="StartWindowHours" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours"></a>

```csharp
public double StartWindowHours { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingPlanConfig <a name="BackupRestoreTestingPlanConfig" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupRestoreTestingPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BackupRestoreTestingPlanRecoveryPointSelection RecoveryPointSelection,
    string RestoreTestingPlanName,
    string ScheduleExpression,
    string ScheduleExpressionTimezone = null,
    double StartWindowHours = null,
    IResolvable|BackupRestoreTestingPlanTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.restoreTestingPlanName">RestoreTestingPlanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#restore_testing_plan_name BackupRestoreTestingPlan#restore_testing_plan_name}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours">StartWindowHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection"></a>

```csharp
public BackupRestoreTestingPlanRecoveryPointSelection RecoveryPointSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}.

---

##### `RestoreTestingPlanName`<sup>Required</sup> <a name="RestoreTestingPlanName" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.restoreTestingPlanName"></a>

```csharp
public string RestoreTestingPlanName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#restore_testing_plan_name BackupRestoreTestingPlan#restore_testing_plan_name}.

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}.

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}.

---

##### `StartWindowHours`<sup>Optional</sup> <a name="StartWindowHours" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours"></a>

```csharp
public double StartWindowHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags"></a>

```csharp
public IResolvable|BackupRestoreTestingPlanTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}.

---

### BackupRestoreTestingPlanRecoveryPointSelection <a name="BackupRestoreTestingPlanRecoveryPointSelection" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupRestoreTestingPlanRecoveryPointSelection {
    string Algorithm,
    string[] IncludeVaults,
    string[] RecoveryPointTypes,
    string[] ExcludeVaults = null,
    double SelectionWindowDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults">IncludeVaults</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes">RecoveryPointTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults">ExcludeVaults</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays">SelectionWindowDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}.

---

##### `IncludeVaults`<sup>Required</sup> <a name="IncludeVaults" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults"></a>

```csharp
public string[] IncludeVaults { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}.

---

##### `RecoveryPointTypes`<sup>Required</sup> <a name="RecoveryPointTypes" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes"></a>

```csharp
public string[] RecoveryPointTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}.

---

##### `ExcludeVaults`<sup>Optional</sup> <a name="ExcludeVaults" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults"></a>

```csharp
public string[] ExcludeVaults { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}.

---

##### `SelectionWindowDays`<sup>Optional</sup> <a name="SelectionWindowDays" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays"></a>

```csharp
public double SelectionWindowDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}.

---

### BackupRestoreTestingPlanTags <a name="BackupRestoreTestingPlanTags" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupRestoreTestingPlanTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#key BackupRestoreTestingPlan#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_restore_testing_plan#value BackupRestoreTestingPlan#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingPlanRecoveryPointSelectionOutputReference <a name="BackupRestoreTestingPlanRecoveryPointSelectionOutputReference" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupRestoreTestingPlanRecoveryPointSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults">ResetExcludeVaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays">ResetSelectionWindowDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeVaults` <a name="ResetExcludeVaults" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults"></a>

```csharp
private void ResetExcludeVaults()
```

##### `ResetSelectionWindowDays` <a name="ResetSelectionWindowDays" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays"></a>

```csharp
private void ResetSelectionWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput">ExcludeVaultsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput">IncludeVaultsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput">RecoveryPointTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput">SelectionWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults">ExcludeVaults</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults">IncludeVaults</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes">RecoveryPointTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays">SelectionWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `ExcludeVaultsInput`<sup>Optional</sup> <a name="ExcludeVaultsInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput"></a>

```csharp
public string[] ExcludeVaultsInput { get; }
```

- *Type:* string[]

---

##### `IncludeVaultsInput`<sup>Optional</sup> <a name="IncludeVaultsInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput"></a>

```csharp
public string[] IncludeVaultsInput { get; }
```

- *Type:* string[]

---

##### `RecoveryPointTypesInput`<sup>Optional</sup> <a name="RecoveryPointTypesInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput"></a>

```csharp
public string[] RecoveryPointTypesInput { get; }
```

- *Type:* string[]

---

##### `SelectionWindowDaysInput`<sup>Optional</sup> <a name="SelectionWindowDaysInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput"></a>

```csharp
public double SelectionWindowDaysInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ExcludeVaults`<sup>Required</sup> <a name="ExcludeVaults" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults"></a>

```csharp
public string[] ExcludeVaults { get; }
```

- *Type:* string[]

---

##### `IncludeVaults`<sup>Required</sup> <a name="IncludeVaults" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults"></a>

```csharp
public string[] IncludeVaults { get; }
```

- *Type:* string[]

---

##### `RecoveryPointTypes`<sup>Required</sup> <a name="RecoveryPointTypes" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes"></a>

```csharp
public string[] RecoveryPointTypes { get; }
```

- *Type:* string[]

---

##### `SelectionWindowDays`<sup>Required</sup> <a name="SelectionWindowDays" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays"></a>

```csharp
public double SelectionWindowDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupRestoreTestingPlanRecoveryPointSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>

---


### BackupRestoreTestingPlanTagsList <a name="BackupRestoreTestingPlanTagsList" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupRestoreTestingPlanTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.get"></a>

```csharp
private BackupRestoreTestingPlanTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsList.property.internalValue"></a>

```csharp
public IResolvable|BackupRestoreTestingPlanTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>[]

---


### BackupRestoreTestingPlanTagsOutputReference <a name="BackupRestoreTestingPlanTagsOutputReference" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupRestoreTestingPlanTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupRestoreTestingPlanTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupRestoreTestingPlan.BackupRestoreTestingPlanTags">BackupRestoreTestingPlanTags</a>

---



