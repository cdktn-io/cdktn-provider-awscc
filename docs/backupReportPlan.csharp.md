# `backupReportPlan` Submodule <a name="`backupReportPlan` Submodule" id="@cdktn/provider-awscc.backupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupReportPlan <a name="BackupReportPlan" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan awscc_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlan(Construct Scope, string Id, BackupReportPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel">PutReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags">PutReportPlanTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting">PutReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanDescription">ResetReportPlanDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanName">ResetReportPlanName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanTags">ResetReportPlanTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReportDeliveryChannel` <a name="PutReportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel"></a>

```csharp
private void PutReportDeliveryChannel(BackupReportPlanReportDeliveryChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `PutReportPlanTags` <a name="PutReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags"></a>

```csharp
private void PutReportPlanTags(IResolvable|BackupReportPlanReportPlanTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

---

##### `PutReportSetting` <a name="PutReportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting"></a>

```csharp
private void PutReportSetting(BackupReportPlanReportSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `ResetReportPlanDescription` <a name="ResetReportPlanDescription" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanDescription"></a>

```csharp
private void ResetReportPlanDescription()
```

##### `ResetReportPlanName` <a name="ResetReportPlanName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanName"></a>

```csharp
private void ResetReportPlanName()
```

##### `ResetReportPlanTags` <a name="ResetReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanTags"></a>

```csharp
private void ResetReportPlanTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupReportPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupReportPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupReportPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupReportPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupReportPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupReportPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupReportPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupReportPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupReportPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel">ReportDeliveryChannel</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanArn">ReportPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTags">ReportPlanTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList">BackupReportPlanReportPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSetting">ReportSetting</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput">ReportDeliveryChannelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescriptionInput">ReportPlanDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanNameInput">ReportPlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTagsInput">ReportPlanTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSettingInput">ReportSettingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescription">ReportPlanDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanName">ReportPlanName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReportDeliveryChannel`<sup>Required</sup> <a name="ReportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel"></a>

```csharp
public BackupReportPlanReportDeliveryChannelOutputReference ReportDeliveryChannel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a>

---

##### `ReportPlanArn`<sup>Required</sup> <a name="ReportPlanArn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanArn"></a>

```csharp
public string ReportPlanArn { get; }
```

- *Type:* string

---

##### `ReportPlanTags`<sup>Required</sup> <a name="ReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTags"></a>

```csharp
public BackupReportPlanReportPlanTagsList ReportPlanTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList">BackupReportPlanReportPlanTagsList</a>

---

##### `ReportSetting`<sup>Required</sup> <a name="ReportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSetting"></a>

```csharp
public BackupReportPlanReportSettingOutputReference ReportSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a>

---

##### `ReportDeliveryChannelInput`<sup>Optional</sup> <a name="ReportDeliveryChannelInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput"></a>

```csharp
public IResolvable|BackupReportPlanReportDeliveryChannel ReportDeliveryChannelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `ReportPlanDescriptionInput`<sup>Optional</sup> <a name="ReportPlanDescriptionInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescriptionInput"></a>

```csharp
public string ReportPlanDescriptionInput { get; }
```

- *Type:* string

---

##### `ReportPlanNameInput`<sup>Optional</sup> <a name="ReportPlanNameInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanNameInput"></a>

```csharp
public string ReportPlanNameInput { get; }
```

- *Type:* string

---

##### `ReportPlanTagsInput`<sup>Optional</sup> <a name="ReportPlanTagsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTagsInput"></a>

```csharp
public IResolvable|BackupReportPlanReportPlanTags[] ReportPlanTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

---

##### `ReportSettingInput`<sup>Optional</sup> <a name="ReportSettingInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSettingInput"></a>

```csharp
public IResolvable|BackupReportPlanReportSetting ReportSettingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `ReportPlanDescription`<sup>Required</sup> <a name="ReportPlanDescription" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescription"></a>

```csharp
public string ReportPlanDescription { get; }
```

- *Type:* string

---

##### `ReportPlanName`<sup>Required</sup> <a name="ReportPlanName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanName"></a>

```csharp
public string ReportPlanName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupReportPlanConfig <a name="BackupReportPlanConfig" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BackupReportPlanReportDeliveryChannel ReportDeliveryChannel,
    BackupReportPlanReportSetting ReportSetting,
    string ReportPlanDescription = null,
    string ReportPlanName = null,
    IResolvable|BackupReportPlanReportPlanTags[] ReportPlanTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel">ReportDeliveryChannel</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportSetting">ReportSetting</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | Identifies the report template for the report. Reports are built using a report template. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanDescription">ReportPlanDescription</a></code> | <code>string</code> | An optional description of the report plan with a maximum of 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanName">ReportPlanName</a></code> | <code>string</code> | The unique name of the report plan. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanTags">ReportPlanTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]</code> | Metadata that you can assign to help organize the report plans that you create. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReportDeliveryChannel`<sup>Required</sup> <a name="ReportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel"></a>

```csharp
public BackupReportPlanReportDeliveryChannel ReportDeliveryChannel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `ReportSetting`<sup>Required</sup> <a name="ReportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportSetting"></a>

```csharp
public BackupReportPlanReportSetting ReportSetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

Identifies the report template for the report. Reports are built using a report template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `ReportPlanDescription`<sup>Optional</sup> <a name="ReportPlanDescription" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanDescription"></a>

```csharp
public string ReportPlanDescription { get; set; }
```

- *Type:* string

An optional description of the report plan with a maximum of 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#report_plan_description BackupReportPlan#report_plan_description}

---

##### `ReportPlanName`<sup>Optional</sup> <a name="ReportPlanName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanName"></a>

```csharp
public string ReportPlanName { get; set; }
```

- *Type:* string

The unique name of the report plan.

The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#report_plan_name BackupReportPlan#report_plan_name}

---

##### `ReportPlanTags`<sup>Optional</sup> <a name="ReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanTags"></a>

```csharp
public IResolvable|BackupReportPlanReportPlanTags[] ReportPlanTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

Metadata that you can assign to help organize the report plans that you create.

Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#report_plan_tags BackupReportPlan#report_plan_tags}

---

### BackupReportPlanReportDeliveryChannel <a name="BackupReportPlanReportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanReportDeliveryChannel {
    string S3BucketName,
    string[] Formats = null,
    string S3KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | The unique name of the S3 bucket that receives your reports. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats">Formats</a></code> | <code>string[]</code> | A list of the format of your reports: CSV, JSON, or both. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

The unique name of the S3 bucket that receives your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}

---

##### `Formats`<sup>Optional</sup> <a name="Formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats"></a>

```csharp
public string[] Formats { get; set; }
```

- *Type:* string[]

A list of the format of your reports: CSV, JSON, or both.

If not specified, the default format is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#formats BackupReportPlan#formats}

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3.

The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}

---

### BackupReportPlanReportPlanTags <a name="BackupReportPlanReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanReportPlanTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#key BackupReportPlan#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#value BackupReportPlan#value}

---

### BackupReportPlanReportSetting <a name="BackupReportPlanReportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanReportSetting {
    string ReportTemplate,
    string[] Accounts = null,
    string[] FrameworkArns = null,
    string[] OrganizationUnits = null,
    string[] Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate">ReportTemplate</a></code> | <code>string</code> | Identifies the report template for the report. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.accounts">Accounts</a></code> | <code>string[]</code> | The list of AWS accounts that a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns">FrameworkArns</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of the frameworks a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.organizationUnits">OrganizationUnits</a></code> | <code>string[]</code> | The list of AWS organization units that a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.regions">Regions</a></code> | <code>string[]</code> | The list of AWS regions that a report covers. |

---

##### `ReportTemplate`<sup>Required</sup> <a name="ReportTemplate" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate"></a>

```csharp
public string ReportTemplate { get; set; }
```

- *Type:* string

Identifies the report template for the report.

Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#report_template BackupReportPlan#report_template}

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.accounts"></a>

```csharp
public string[] Accounts { get; set; }
```

- *Type:* string[]

The list of AWS accounts that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#accounts BackupReportPlan#accounts}

---

##### `FrameworkArns`<sup>Optional</sup> <a name="FrameworkArns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns"></a>

```csharp
public string[] FrameworkArns { get; set; }
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of the frameworks a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#framework_arns BackupReportPlan#framework_arns}

---

##### `OrganizationUnits`<sup>Optional</sup> <a name="OrganizationUnits" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.organizationUnits"></a>

```csharp
public string[] OrganizationUnits { get; set; }
```

- *Type:* string[]

The list of AWS organization units that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#organization_units BackupReportPlan#organization_units}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

The list of AWS regions that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_report_plan#regions BackupReportPlan#regions}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupReportPlanReportDeliveryChannelOutputReference <a name="BackupReportPlanReportDeliveryChannelOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanReportDeliveryChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats">ResetFormats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormats` <a name="ResetFormats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats"></a>

```csharp
private void ResetFormats()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput">FormatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats">Formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatsInput`<sup>Optional</sup> <a name="FormatsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput"></a>

```csharp
public string[] FormatsInput { get; }
```

- *Type:* string[]

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `Formats`<sup>Required</sup> <a name="Formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```csharp
public string[] Formats { get; }
```

- *Type:* string[]

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupReportPlanReportDeliveryChannel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---


### BackupReportPlanReportPlanTagsList <a name="BackupReportPlanReportPlanTagsList" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanReportPlanTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get"></a>

```csharp
private BackupReportPlanReportPlanTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.internalValue"></a>

```csharp
public IResolvable|BackupReportPlanReportPlanTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

---


### BackupReportPlanReportPlanTagsOutputReference <a name="BackupReportPlanReportPlanTagsOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanReportPlanTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupReportPlanReportPlanTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>

---


### BackupReportPlanReportSettingOutputReference <a name="BackupReportPlanReportSettingOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupReportPlanReportSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns">ResetFrameworkArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetOrganizationUnits">ResetOrganizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetAccounts"></a>

```csharp
private void ResetAccounts()
```

##### `ResetFrameworkArns` <a name="ResetFrameworkArns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns"></a>

```csharp
private void ResetFrameworkArns()
```

##### `ResetOrganizationUnits` <a name="ResetOrganizationUnits" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetOrganizationUnits"></a>

```csharp
private void ResetOrganizationUnits()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accountsInput">AccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput">FrameworkArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnitsInput">OrganizationUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput">ReportTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accounts">Accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns">FrameworkArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnits">OrganizationUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate">ReportTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accountsInput"></a>

```csharp
public string[] AccountsInput { get; }
```

- *Type:* string[]

---

##### `FrameworkArnsInput`<sup>Optional</sup> <a name="FrameworkArnsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput"></a>

```csharp
public string[] FrameworkArnsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationUnitsInput`<sup>Optional</sup> <a name="OrganizationUnitsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnitsInput"></a>

```csharp
public string[] OrganizationUnitsInput { get; }
```

- *Type:* string[]

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `ReportTemplateInput`<sup>Optional</sup> <a name="ReportTemplateInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput"></a>

```csharp
public string ReportTemplateInput { get; }
```

- *Type:* string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accounts"></a>

```csharp
public string[] Accounts { get; }
```

- *Type:* string[]

---

##### `FrameworkArns`<sup>Required</sup> <a name="FrameworkArns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```csharp
public string[] FrameworkArns { get; }
```

- *Type:* string[]

---

##### `OrganizationUnits`<sup>Required</sup> <a name="OrganizationUnits" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnits"></a>

```csharp
public string[] OrganizationUnits { get; }
```

- *Type:* string[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `ReportTemplate`<sup>Required</sup> <a name="ReportTemplate" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```csharp
public string ReportTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupReportPlanReportSetting InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---



