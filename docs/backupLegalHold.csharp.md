# `backupLegalHold` Submodule <a name="`backupLegalHold` Submodule" id="@cdktn/provider-awscc.backupLegalHold"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLegalHold <a name="BackupLegalHold" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold awscc_backup_legal_hold}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHold(Construct Scope, string Id, BackupLegalHoldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig">BackupLegalHoldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig">BackupLegalHoldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection">PutRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecoveryPointSelection` <a name="PutRecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection"></a>

```csharp
private void PutRecoveryPointSelection(BackupLegalHoldRecoveryPointSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags"></a>

```csharp
private void PutTags(IResolvable|BackupLegalHoldTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLegalHold.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLegalHold.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLegalHold.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLegalHold.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupLegalHold to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupLegalHold that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupLegalHold to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId">LegalHoldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput">RecoveryPointSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LegalHoldId`<sup>Required</sup> <a name="LegalHoldId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId"></a>

```csharp
public string LegalHoldId { get; }
```

- *Type:* string

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection"></a>

```csharp
public BackupLegalHoldRecoveryPointSelectionOutputReference RecoveryPointSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags"></a>

```csharp
public BackupLegalHoldTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RecoveryPointSelectionInput`<sup>Optional</sup> <a name="RecoveryPointSelectionInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput"></a>

```csharp
public IResolvable|BackupLegalHoldRecoveryPointSelection RecoveryPointSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput"></a>

```csharp
public IResolvable|BackupLegalHoldTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLegalHoldConfig <a name="BackupLegalHoldConfig" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    BackupLegalHoldRecoveryPointSelection RecoveryPointSelection,
    string Title,
    IResolvable|BackupLegalHoldTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description">Description</a></code> | <code>string</code> | The description of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | The criteria to assign a set of resources, such as resource types or backup vaults. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title">Title</a></code> | <code>string</code> | The title of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]</code> | Optional tags to include. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#description BackupLegalHold#description}

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection"></a>

```csharp
public BackupLegalHoldRecoveryPointSelection RecoveryPointSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

The criteria to assign a set of resources, such as resource types or backup vaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#recovery_point_selection BackupLegalHold#recovery_point_selection}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#title BackupLegalHold#title}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags"></a>

```csharp
public IResolvable|BackupLegalHoldTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

Optional tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#tags BackupLegalHold#tags}

---

### BackupLegalHoldRecoveryPointSelection <a name="BackupLegalHoldRecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldRecoveryPointSelection {
    BackupLegalHoldRecoveryPointSelectionDateRange DateRange = null,
    string[] ResourceIdentifiers = null,
    string[] VaultNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange">DateRange</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | A date range for filtering recovery points. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers">ResourceIdentifiers</a></code> | <code>string[]</code> | The resources included in the resource selection. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames">VaultNames</a></code> | <code>string[]</code> | The names of the vaults in which the selected recovery points are contained. |

---

##### `DateRange`<sup>Optional</sup> <a name="DateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange"></a>

```csharp
public BackupLegalHoldRecoveryPointSelectionDateRange DateRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

A date range for filtering recovery points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#date_range BackupLegalHold#date_range}

---

##### `ResourceIdentifiers`<sup>Optional</sup> <a name="ResourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers"></a>

```csharp
public string[] ResourceIdentifiers { get; set; }
```

- *Type:* string[]

The resources included in the resource selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#resource_identifiers BackupLegalHold#resource_identifiers}

---

##### `VaultNames`<sup>Optional</sup> <a name="VaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames"></a>

```csharp
public string[] VaultNames { get; set; }
```

- *Type:* string[]

The names of the vaults in which the selected recovery points are contained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#vault_names BackupLegalHold#vault_names}

---

### BackupLegalHoldRecoveryPointSelectionDateRange <a name="BackupLegalHoldRecoveryPointSelectionDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldRecoveryPointSelectionDateRange {
    string FromDate = null,
    string ToDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate">FromDate</a></code> | <code>string</code> | The beginning date, inclusive. ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate">ToDate</a></code> | <code>string</code> | The end date, inclusive. ISO 8601 date-time. |

---

##### `FromDate`<sup>Optional</sup> <a name="FromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate"></a>

```csharp
public string FromDate { get; set; }
```

- *Type:* string

The beginning date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#from_date BackupLegalHold#from_date}

---

##### `ToDate`<sup>Optional</sup> <a name="ToDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate"></a>

```csharp
public string ToDate { get; set; }
```

- *Type:* string

The end date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#to_date BackupLegalHold#to_date}

---

### BackupLegalHoldTags <a name="BackupLegalHoldTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#key BackupLegalHold#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_legal_hold#value BackupLegalHold#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference <a name="BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate">ResetFromDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate">ResetToDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromDate` <a name="ResetFromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate"></a>

```csharp
private void ResetFromDate()
```

##### `ResetToDate` <a name="ResetToDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate"></a>

```csharp
private void ResetToDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput">FromDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput">ToDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate">FromDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate">ToDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromDateInput`<sup>Optional</sup> <a name="FromDateInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput"></a>

```csharp
public string FromDateInput { get; }
```

- *Type:* string

---

##### `ToDateInput`<sup>Optional</sup> <a name="ToDateInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput"></a>

```csharp
public string ToDateInput { get; }
```

- *Type:* string

---

##### `FromDate`<sup>Required</sup> <a name="FromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate"></a>

```csharp
public string FromDate { get; }
```

- *Type:* string

---

##### `ToDate`<sup>Required</sup> <a name="ToDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate"></a>

```csharp
public string ToDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupLegalHoldRecoveryPointSelectionDateRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---


### BackupLegalHoldRecoveryPointSelectionOutputReference <a name="BackupLegalHoldRecoveryPointSelectionOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldRecoveryPointSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange">PutDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange">ResetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers">ResetResourceIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames">ResetVaultNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateRange` <a name="PutDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange"></a>

```csharp
private void PutDateRange(BackupLegalHoldRecoveryPointSelectionDateRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---

##### `ResetDateRange` <a name="ResetDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange"></a>

```csharp
private void ResetDateRange()
```

##### `ResetResourceIdentifiers` <a name="ResetResourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers"></a>

```csharp
private void ResetResourceIdentifiers()
```

##### `ResetVaultNames` <a name="ResetVaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames"></a>

```csharp
private void ResetVaultNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange">DateRange</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput">DateRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput">ResourceIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput">VaultNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers">ResourceIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames">VaultNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateRange`<sup>Required</sup> <a name="DateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange"></a>

```csharp
public BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference DateRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a>

---

##### `DateRangeInput`<sup>Optional</sup> <a name="DateRangeInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput"></a>

```csharp
public IResolvable|BackupLegalHoldRecoveryPointSelectionDateRange DateRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---

##### `ResourceIdentifiersInput`<sup>Optional</sup> <a name="ResourceIdentifiersInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput"></a>

```csharp
public string[] ResourceIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `VaultNamesInput`<sup>Optional</sup> <a name="VaultNamesInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput"></a>

```csharp
public string[] VaultNamesInput { get; }
```

- *Type:* string[]

---

##### `ResourceIdentifiers`<sup>Required</sup> <a name="ResourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers"></a>

```csharp
public string[] ResourceIdentifiers { get; }
```

- *Type:* string[]

---

##### `VaultNames`<sup>Required</sup> <a name="VaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames"></a>

```csharp
public string[] VaultNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupLegalHoldRecoveryPointSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---


### BackupLegalHoldTagsList <a name="BackupLegalHoldTagsList" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get"></a>

```csharp
private BackupLegalHoldTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue"></a>

```csharp
public IResolvable|BackupLegalHoldTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

---


### BackupLegalHoldTagsOutputReference <a name="BackupLegalHoldTagsOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLegalHoldTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupLegalHoldTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>

---



