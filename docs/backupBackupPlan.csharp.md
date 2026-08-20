# `backupBackupPlan` Submodule <a name="`backupBackupPlan` Submodule" id="@cdktn/provider-awscc.backupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupPlan <a name="BackupBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan awscc_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlan(Construct Scope, string Id, BackupBackupPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig">BackupBackupPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig">BackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan">PutBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags">ResetBackupPlanTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPlan` <a name="PutBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan"></a>

```csharp
private void PutBackupPlan(BackupBackupPlanBackupPlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `ResetBackupPlanTags` <a name="ResetBackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags"></a>

```csharp
private void ResetBackupPlanTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupBackupPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan">BackupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn">BackupPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId">BackupPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput">BackupPlanInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput">BackupPlanTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags">BackupPlanTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan"></a>

```csharp
public BackupBackupPlanBackupPlanOutputReference BackupPlan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a>

---

##### `BackupPlanArn`<sup>Required</sup> <a name="BackupPlanArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn"></a>

```csharp
public string BackupPlanArn { get; }
```

- *Type:* string

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId"></a>

```csharp
public string BackupPlanId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlan BackupPlanInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `BackupPlanTagsInput`<sup>Optional</sup> <a name="BackupPlanTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupPlanTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BackupPlanTags`<sup>Required</sup> <a name="BackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupPlanTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupPlanBackupPlan <a name="BackupBackupPlanBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlan {
    string BackupPlanName,
    IResolvable|BackupBackupPlanBackupPlanBackupPlanRule[] BackupPlanRule,
    IResolvable|BackupBackupPlanBackupPlanAdvancedBackupSettings[] AdvancedBackupSettings = null,
    IResolvable|BackupBackupPlanBackupPlanScanSettings[] ScanSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName">BackupPlanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule">BackupPlanRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings">AdvancedBackupSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings">ScanSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}. |

---

##### `BackupPlanName`<sup>Required</sup> <a name="BackupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName"></a>

```csharp
public string BackupPlanName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}.

---

##### `BackupPlanRule`<sup>Required</sup> <a name="BackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRule[] BackupPlanRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}.

---

##### `AdvancedBackupSettings`<sup>Optional</sup> <a name="AdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanAdvancedBackupSettings[] AdvancedBackupSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}.

---

##### `ScanSettings`<sup>Optional</sup> <a name="ScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanScanSettings[] ScanSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}.

---

### BackupBackupPlanBackupPlanAdvancedBackupSettings <a name="BackupBackupPlanBackupPlanAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanAdvancedBackupSettings {
    string BackupOptions = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions">BackupOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}. |

---

##### `BackupOptions`<sup>Optional</sup> <a name="BackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions"></a>

```csharp
public string BackupOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}.

---

### BackupBackupPlanBackupPlanBackupPlanRule <a name="BackupBackupPlanBackupPlanBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRule {
    string RuleName,
    string TargetBackupVault,
    double CompletionWindowMinutes = null,
    IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] CopyActions = null,
    bool|IResolvable EnableContinuousBackup = null,
    IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] IndexActions = null,
    BackupBackupPlanBackupPlanBackupPlanRuleLifecycle Lifecycle = null,
    System.Collections.Generic.IDictionary<string, string> RecoveryPointTags = null,
    IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] ScanActions = null,
    string ScheduleExpression = null,
    string ScheduleExpressionTimezone = null,
    double StartWindowMinutes = null,
    string TargetLogicallyAirGappedBackupVaultArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault">TargetBackupVault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes">CompletionWindowMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions">CopyActions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions">IndexActions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions">ScanActions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes">StartWindowMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}. |

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}.

---

##### `TargetBackupVault`<sup>Required</sup> <a name="TargetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault"></a>

```csharp
public string TargetBackupVault { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}.

---

##### `CompletionWindowMinutes`<sup>Optional</sup> <a name="CompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes"></a>

```csharp
public double CompletionWindowMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}.

---

##### `CopyActions`<sup>Optional</sup> <a name="CopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] CopyActions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}.

---

##### `EnableContinuousBackup`<sup>Optional</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup"></a>

```csharp
public bool|IResolvable EnableContinuousBackup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}.

---

##### `IndexActions`<sup>Optional</sup> <a name="IndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] IndexActions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleLifecycle Lifecycle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

##### `RecoveryPointTags`<sup>Optional</sup> <a name="RecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RecoveryPointTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}.

---

##### `ScanActions`<sup>Optional</sup> <a name="ScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] ScanActions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}.

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}.

---

##### `StartWindowMinutes`<sup>Optional</sup> <a name="StartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes"></a>

```csharp
public double StartWindowMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}.

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Optional</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn"></a>

```csharp
public string TargetLogicallyAirGappedBackupVaultArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActions {
    string DestinationBackupVaultArn = null,
    BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle Lifecycle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn">DestinationBackupVaultArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |

---

##### `DestinationBackupVaultArn`<sup>Optional</sup> <a name="DestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn"></a>

```csharp
public string DestinationBackupVaultArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle Lifecycle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle {
    double DeleteAfterDays = null,
    double MoveToColdStorageAfterDays = null,
    bool|IResolvable OptInToArchiveForSupportedResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `DeleteAfterDays`<sup>Optional</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays"></a>

```csharp
public double DeleteAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `MoveToColdStorageAfterDays`<sup>Optional</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays"></a>

```csharp
public double MoveToColdStorageAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `OptInToArchiveForSupportedResources`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources"></a>

```csharp
public bool|IResolvable OptInToArchiveForSupportedResources { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleIndexActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleIndexActions {
    string[] ResourceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleLifecycle {
    double DeleteAfterDays = null,
    double MoveToColdStorageAfterDays = null,
    bool|IResolvable OptInToArchiveForSupportedResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `DeleteAfterDays`<sup>Optional</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays"></a>

```csharp
public double DeleteAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `MoveToColdStorageAfterDays`<sup>Optional</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays"></a>

```csharp
public double MoveToColdStorageAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `OptInToArchiveForSupportedResources`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources"></a>

```csharp
public bool|IResolvable OptInToArchiveForSupportedResources { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleScanActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleScanActions {
    string MalwareScanner = null,
    string ScanMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner">MalwareScanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode">ScanMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}. |

---

##### `MalwareScanner`<sup>Optional</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner"></a>

```csharp
public string MalwareScanner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `ScanMode`<sup>Optional</sup> <a name="ScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode"></a>

```csharp
public string ScanMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}.

---

### BackupBackupPlanBackupPlanScanSettings <a name="BackupBackupPlanBackupPlanScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanScanSettings {
    string MalwareScanner = null,
    string[] ResourceTypes = null,
    string ScannerRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner">MalwareScanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}. |

---

##### `MalwareScanner`<sup>Optional</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner"></a>

```csharp
public string MalwareScanner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

##### `ScannerRoleArn`<sup>Optional</sup> <a name="ScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn"></a>

```csharp
public string ScannerRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}.

---

### BackupBackupPlanConfig <a name="BackupBackupPlanConfig" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BackupBackupPlanBackupPlan BackupPlan,
    System.Collections.Generic.IDictionary<string, string> BackupPlanTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan">BackupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags">BackupPlanTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan"></a>

```csharp
public BackupBackupPlanBackupPlan BackupPlan { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}.

---

##### `BackupPlanTags`<sup>Optional</sup> <a name="BackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupPlanTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupPlanBackupPlanAdvancedBackupSettingsList <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanAdvancedBackupSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get"></a>

```csharp
private BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanAdvancedBackupSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

---


### BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions">ResetBackupOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupOptions` <a name="ResetBackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions"></a>

```csharp
private void ResetBackupOptions()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput">BackupOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions">BackupOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupOptionsInput`<sup>Optional</sup> <a name="BackupOptionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput"></a>

```csharp
public string BackupOptionsInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions"></a>

```csharp
public string BackupOptions { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanAdvancedBackupSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays">ResetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays">ResetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources">ResetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteAfterDays` <a name="ResetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays"></a>

```csharp
private void ResetDeleteAfterDays()
```

##### `ResetMoveToColdStorageAfterDays` <a name="ResetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```csharp
private void ResetMoveToColdStorageAfterDays()
```

##### `ResetOptInToArchiveForSupportedResources` <a name="ResetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```csharp
private void ResetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput">DeleteAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">MoveToColdStorageAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">OptInToArchiveForSupportedResourcesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteAfterDaysInput`<sup>Optional</sup> <a name="DeleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```csharp
public double DeleteAfterDaysInput { get; }
```

- *Type:* double

---

##### `MoveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="MoveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```csharp
public double MoveToColdStorageAfterDaysInput { get; }
```

- *Type:* double

---

##### `OptInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```csharp
public bool|IResolvable OptInToArchiveForSupportedResourcesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays"></a>

```csharp
public double DeleteAfterDays { get; }
```

- *Type:* double

---

##### `MoveToColdStorageAfterDays`<sup>Required</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```csharp
public double MoveToColdStorageAfterDays { get; }
```

- *Type:* double

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```csharp
public bool|IResolvable OptInToArchiveForSupportedResources { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get"></a>

```csharp
private BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn">ResetDestinationBackupVaultArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle"></a>

```csharp
private void PutLifecycle(BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `ResetDestinationBackupVaultArn` <a name="ResetDestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn"></a>

```csharp
private void ResetDestinationBackupVaultArn()
```

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle"></a>

```csharp
private void ResetLifecycle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput">DestinationBackupVaultArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn">DestinationBackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference Lifecycle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a>

---

##### `DestinationBackupVaultArnInput`<sup>Optional</sup> <a name="DestinationBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput"></a>

```csharp
public string DestinationBackupVaultArnInput { get; }
```

- *Type:* string

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle LifecycleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `DestinationBackupVaultArn`<sup>Required</sup> <a name="DestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn"></a>

```csharp
public string DestinationBackupVaultArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get"></a>

```csharp
private BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleIndexActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays">ResetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays">ResetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources">ResetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteAfterDays` <a name="ResetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays"></a>

```csharp
private void ResetDeleteAfterDays()
```

##### `ResetMoveToColdStorageAfterDays` <a name="ResetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```csharp
private void ResetMoveToColdStorageAfterDays()
```

##### `ResetOptInToArchiveForSupportedResources` <a name="ResetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```csharp
private void ResetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput">DeleteAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">MoveToColdStorageAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">OptInToArchiveForSupportedResourcesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteAfterDaysInput`<sup>Optional</sup> <a name="DeleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```csharp
public double DeleteAfterDaysInput { get; }
```

- *Type:* double

---

##### `MoveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="MoveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```csharp
public double MoveToColdStorageAfterDaysInput { get; }
```

- *Type:* double

---

##### `OptInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```csharp
public bool|IResolvable OptInToArchiveForSupportedResourcesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays"></a>

```csharp
public double DeleteAfterDays { get; }
```

- *Type:* double

---

##### `MoveToColdStorageAfterDays`<sup>Required</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```csharp
public double MoveToColdStorageAfterDays { get; }
```

- *Type:* double

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```csharp
public bool|IResolvable OptInToArchiveForSupportedResources { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleLifecycle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleList <a name="BackupBackupPlanBackupPlanBackupPlanRuleList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get"></a>

```csharp
private BackupBackupPlanBackupPlanBackupPlanRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions">PutCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions">PutIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions">PutScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes">ResetCompletionWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions">ResetCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup">ResetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions">ResetIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags">ResetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions">ResetScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes">ResetStartWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn">ResetTargetLogicallyAirGappedBackupVaultArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCopyActions` <a name="PutCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions"></a>

```csharp
private void PutCopyActions(IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

---

##### `PutIndexActions` <a name="PutIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions"></a>

```csharp
private void PutIndexActions(IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

---

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle"></a>

```csharp
private void PutLifecycle(BackupBackupPlanBackupPlanBackupPlanRuleLifecycle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `PutScanActions` <a name="PutScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions"></a>

```csharp
private void PutScanActions(IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

---

##### `ResetCompletionWindowMinutes` <a name="ResetCompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes"></a>

```csharp
private void ResetCompletionWindowMinutes()
```

##### `ResetCopyActions` <a name="ResetCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions"></a>

```csharp
private void ResetCopyActions()
```

##### `ResetEnableContinuousBackup` <a name="ResetEnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```csharp
private void ResetEnableContinuousBackup()
```

##### `ResetIndexActions` <a name="ResetIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions"></a>

```csharp
private void ResetIndexActions()
```

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle"></a>

```csharp
private void ResetLifecycle()
```

##### `ResetRecoveryPointTags` <a name="ResetRecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```csharp
private void ResetRecoveryPointTags()
```

##### `ResetScanActions` <a name="ResetScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions"></a>

```csharp
private void ResetScanActions()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone"></a>

```csharp
private void ResetScheduleExpressionTimezone()
```

##### `ResetStartWindowMinutes` <a name="ResetStartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes"></a>

```csharp
private void ResetStartWindowMinutes()
```

##### `ResetTargetLogicallyAirGappedBackupVaultArn` <a name="ResetTargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn"></a>

```csharp
private void ResetTargetLogicallyAirGappedBackupVaultArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions">CopyActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions">IndexActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions">ScanActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput">CompletionWindowMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput">CopyActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput">EnableContinuousBackupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput">IndexActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput">RecoveryPointTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput">ScanActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput">StartWindowMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput">TargetBackupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput">TargetLogicallyAirGappedBackupVaultArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes">CompletionWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes">StartWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault">TargetBackupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CopyActions`<sup>Required</sup> <a name="CopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList CopyActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a>

---

##### `IndexActions`<sup>Required</sup> <a name="IndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList IndexActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a>

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference Lifecycle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a>

---

##### `ScanActions`<sup>Required</sup> <a name="ScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList ScanActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a>

---

##### `CompletionWindowMinutesInput`<sup>Optional</sup> <a name="CompletionWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput"></a>

```csharp
public double CompletionWindowMinutesInput { get; }
```

- *Type:* double

---

##### `CopyActionsInput`<sup>Optional</sup> <a name="CopyActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[] CopyActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

---

##### `EnableContinuousBackupInput`<sup>Optional</sup> <a name="EnableContinuousBackupInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```csharp
public bool|IResolvable EnableContinuousBackupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IndexActionsInput`<sup>Optional</sup> <a name="IndexActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[] IndexActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleLifecycle LifecycleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `RecoveryPointTagsInput`<sup>Optional</sup> <a name="RecoveryPointTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RecoveryPointTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `ScanActionsInput`<sup>Optional</sup> <a name="ScanActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] ScanActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```csharp
public string ScheduleExpressionTimezoneInput { get; }
```

- *Type:* string

---

##### `StartWindowMinutesInput`<sup>Optional</sup> <a name="StartWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput"></a>

```csharp
public double StartWindowMinutesInput { get; }
```

- *Type:* double

---

##### `TargetBackupVaultInput`<sup>Optional</sup> <a name="TargetBackupVaultInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput"></a>

```csharp
public string TargetBackupVaultInput { get; }
```

- *Type:* string

---

##### `TargetLogicallyAirGappedBackupVaultArnInput`<sup>Optional</sup> <a name="TargetLogicallyAirGappedBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput"></a>

```csharp
public string TargetLogicallyAirGappedBackupVaultArnInput { get; }
```

- *Type:* string

---

##### `CompletionWindowMinutes`<sup>Required</sup> <a name="CompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes"></a>

```csharp
public double CompletionWindowMinutes { get; }
```

- *Type:* double

---

##### `EnableContinuousBackup`<sup>Required</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```csharp
public bool|IResolvable EnableContinuousBackup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecoveryPointTags`<sup>Required</sup> <a name="RecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RecoveryPointTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; }
```

- *Type:* string

---

##### `StartWindowMinutes`<sup>Required</sup> <a name="StartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes"></a>

```csharp
public double StartWindowMinutes { get; }
```

- *Type:* double

---

##### `TargetBackupVault`<sup>Required</sup> <a name="TargetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault"></a>

```csharp
public string TargetBackupVault { get; }
```

- *Type:* string

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```csharp
public string TargetLogicallyAirGappedBackupVaultArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get"></a>

```csharp
private BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleScanActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner">ResetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode">ResetScanMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMalwareScanner` <a name="ResetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner"></a>

```csharp
private void ResetMalwareScanner()
```

##### `ResetScanMode` <a name="ResetScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode"></a>

```csharp
private void ResetScanMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput">MalwareScannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput">ScanModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode">ScanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MalwareScannerInput`<sup>Optional</sup> <a name="MalwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput"></a>

```csharp
public string MalwareScannerInput { get; }
```

- *Type:* string

---

##### `ScanModeInput`<sup>Optional</sup> <a name="ScanModeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput"></a>

```csharp
public string ScanModeInput { get; }
```

- *Type:* string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner"></a>

```csharp
public string MalwareScanner { get; }
```

- *Type:* string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode"></a>

```csharp
public string ScanMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRuleScanActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>

---


### BackupBackupPlanBackupPlanOutputReference <a name="BackupBackupPlanBackupPlanOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings">PutAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule">PutBackupPlanRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings">PutScanSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings">ResetAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings">ResetScanSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedBackupSettings` <a name="PutAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings"></a>

```csharp
private void PutAdvancedBackupSettings(IResolvable|BackupBackupPlanBackupPlanAdvancedBackupSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

---

##### `PutBackupPlanRule` <a name="PutBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule"></a>

```csharp
private void PutBackupPlanRule(IResolvable|BackupBackupPlanBackupPlanBackupPlanRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

---

##### `PutScanSettings` <a name="PutScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings"></a>

```csharp
private void PutScanSettings(IResolvable|BackupBackupPlanBackupPlanScanSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

---

##### `ResetAdvancedBackupSettings` <a name="ResetAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings"></a>

```csharp
private void ResetAdvancedBackupSettings()
```

##### `ResetScanSettings` <a name="ResetScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings"></a>

```csharp
private void ResetScanSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings">AdvancedBackupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule">BackupPlanRule</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings">ScanSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput">AdvancedBackupSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput">BackupPlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput">BackupPlanRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput">ScanSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName">BackupPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedBackupSettings`<sup>Required</sup> <a name="AdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings"></a>

```csharp
public BackupBackupPlanBackupPlanAdvancedBackupSettingsList AdvancedBackupSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a>

---

##### `BackupPlanRule`<sup>Required</sup> <a name="BackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule"></a>

```csharp
public BackupBackupPlanBackupPlanBackupPlanRuleList BackupPlanRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a>

---

##### `ScanSettings`<sup>Required</sup> <a name="ScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings"></a>

```csharp
public BackupBackupPlanBackupPlanScanSettingsList ScanSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a>

---

##### `AdvancedBackupSettingsInput`<sup>Optional</sup> <a name="AdvancedBackupSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanAdvancedBackupSettings[] AdvancedBackupSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

---

##### `BackupPlanNameInput`<sup>Optional</sup> <a name="BackupPlanNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput"></a>

```csharp
public string BackupPlanNameInput { get; }
```

- *Type:* string

---

##### `BackupPlanRuleInput`<sup>Optional</sup> <a name="BackupPlanRuleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanBackupPlanRule[] BackupPlanRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

---

##### `ScanSettingsInput`<sup>Optional</sup> <a name="ScanSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanScanSettings[] ScanSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

---

##### `BackupPlanName`<sup>Required</sup> <a name="BackupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName"></a>

```csharp
public string BackupPlanName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlan InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---


### BackupBackupPlanBackupPlanScanSettingsList <a name="BackupBackupPlanBackupPlanScanSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanScanSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get"></a>

```csharp
private BackupBackupPlanBackupPlanScanSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanScanSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

---


### BackupBackupPlanBackupPlanScanSettingsOutputReference <a name="BackupBackupPlanBackupPlanScanSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupPlanBackupPlanScanSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner">ResetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn">ResetScannerRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMalwareScanner` <a name="ResetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner"></a>

```csharp
private void ResetMalwareScanner()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```

##### `ResetScannerRoleArn` <a name="ResetScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn"></a>

```csharp
private void ResetScannerRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput">MalwareScannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput">ScannerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MalwareScannerInput`<sup>Optional</sup> <a name="MalwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput"></a>

```csharp
public string MalwareScannerInput { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ScannerRoleArnInput`<sup>Optional</sup> <a name="ScannerRoleArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput"></a>

```csharp
public string ScannerRoleArnInput { get; }
```

- *Type:* string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner"></a>

```csharp
public string MalwareScanner { get; }
```

- *Type:* string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `ScannerRoleArn`<sup>Required</sup> <a name="ScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn"></a>

```csharp
public string ScannerRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupPlanBackupPlanScanSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>

---



