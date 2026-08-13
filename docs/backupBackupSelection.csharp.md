# `backupBackupSelection` Submodule <a name="`backupBackupSelection` Submodule" id="@cdktn/provider-awscc.backupBackupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupSelection <a name="BackupBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection awscc_backup_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelection(Construct Scope, string Id, BackupBackupSelectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig">BackupBackupSelectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig">BackupBackupSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection">PutBackupSelection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupSelection` <a name="PutBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection"></a>

```csharp
private void PutBackupSelection(BackupBackupSelectionBackupSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupSelection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupSelection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupSelection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupSelection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupBackupSelection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupBackupSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection">BackupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId">BackupSelectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId">SelectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput">BackupPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput">BackupSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId">BackupPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupSelection`<sup>Required</sup> <a name="BackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection"></a>

```csharp
public BackupBackupSelectionBackupSelectionOutputReference BackupSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a>

---

##### `BackupSelectionId`<sup>Required</sup> <a name="BackupSelectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId"></a>

```csharp
public string BackupSelectionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SelectionId`<sup>Required</sup> <a name="SelectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId"></a>

```csharp
public string SelectionId { get; }
```

- *Type:* string

---

##### `BackupPlanIdInput`<sup>Optional</sup> <a name="BackupPlanIdInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput"></a>

```csharp
public string BackupPlanIdInput { get; }
```

- *Type:* string

---

##### `BackupSelectionInput`<sup>Optional</sup> <a name="BackupSelectionInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelection BackupSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId"></a>

```csharp
public string BackupPlanId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupSelectionBackupSelection <a name="BackupBackupSelectionBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelection {
    string IamRoleArn,
    string SelectionName,
    BackupBackupSelectionBackupSelectionConditions Conditions = null,
    IResolvable|BackupBackupSelectionBackupSelectionListOfTags[] ListOfTags = null,
    string[] NotResources = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName">SelectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags">ListOfTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources">NotResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}. |

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}.

---

##### `SelectionName`<sup>Required</sup> <a name="SelectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName"></a>

```csharp
public string SelectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions"></a>

```csharp
public BackupBackupSelectionBackupSelectionConditions Conditions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}.

---

##### `ListOfTags`<sup>Optional</sup> <a name="ListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionListOfTags[] ListOfTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}.

---

##### `NotResources`<sup>Optional</sup> <a name="NotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources"></a>

```csharp
public string[] NotResources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}.

---

### BackupBackupSelectionBackupSelectionConditions <a name="BackupBackupSelectionBackupSelectionConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditions {
    IResolvable|BackupBackupSelectionBackupSelectionConditionsStringEquals[] StringEquals = null,
    IResolvable|BackupBackupSelectionBackupSelectionConditionsStringLike[] StringLike = null,
    IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] StringNotEquals = null,
    IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotLike[] StringNotLike = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals">StringEquals</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike">StringLike</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals">StringNotEquals</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike">StringNotLike</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}. |

---

##### `StringEquals`<sup>Optional</sup> <a name="StringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringEquals[] StringEquals { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}.

---

##### `StringLike`<sup>Optional</sup> <a name="StringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringLike[] StringLike { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}.

---

##### `StringNotEquals`<sup>Optional</sup> <a name="StringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] StringNotEquals { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}.

---

##### `StringNotLike`<sup>Optional</sup> <a name="StringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotLike[] StringNotLike { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}.

---

### BackupBackupSelectionBackupSelectionConditionsStringEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringEquals {
    string ConditionKey = null,
    string ConditionValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey">ConditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue">ConditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey"></a>

```csharp
public string ConditionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue"></a>

```csharp
public string ConditionValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringLike <a name="BackupBackupSelectionBackupSelectionConditionsStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringLike {
    string ConditionKey = null,
    string ConditionValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey">ConditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue">ConditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey"></a>

```csharp
public string ConditionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue"></a>

```csharp
public string ConditionValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringNotEquals {
    string ConditionKey = null,
    string ConditionValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey">ConditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue">ConditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey"></a>

```csharp
public string ConditionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue"></a>

```csharp
public string ConditionValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotLike <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringNotLike {
    string ConditionKey = null,
    string ConditionValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey">ConditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue">ConditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey"></a>

```csharp
public string ConditionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue"></a>

```csharp
public string ConditionValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionListOfTags <a name="BackupBackupSelectionBackupSelectionListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionListOfTags {
    string ConditionKey = null,
    string ConditionType = null,
    string ConditionValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey">ConditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType">ConditionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue">ConditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey"></a>

```csharp
public string ConditionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionType`<sup>Optional</sup> <a name="ConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType"></a>

```csharp
public string ConditionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue"></a>

```csharp
public string ConditionValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionConfig <a name="BackupBackupSelectionConfig" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupPlanId,
    BackupBackupSelectionBackupSelection BackupSelection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId">BackupPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection">BackupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId"></a>

```csharp
public string BackupPlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}.

---

##### `BackupSelection`<sup>Required</sup> <a name="BackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection"></a>

```csharp
public BackupBackupSelectionBackupSelection BackupSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupSelectionBackupSelectionConditionsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals">PutStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike">PutStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals">PutStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike">PutStringNotLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals">ResetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike">ResetStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals">ResetStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike">ResetStringNotLike</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStringEquals` <a name="PutStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals"></a>

```csharp
private void PutStringEquals(IResolvable|BackupBackupSelectionBackupSelectionConditionsStringEquals[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

---

##### `PutStringLike` <a name="PutStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike"></a>

```csharp
private void PutStringLike(IResolvable|BackupBackupSelectionBackupSelectionConditionsStringLike[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

---

##### `PutStringNotEquals` <a name="PutStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals"></a>

```csharp
private void PutStringNotEquals(IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

---

##### `PutStringNotLike` <a name="PutStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike"></a>

```csharp
private void PutStringNotLike(IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotLike[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

---

##### `ResetStringEquals` <a name="ResetStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals"></a>

```csharp
private void ResetStringEquals()
```

##### `ResetStringLike` <a name="ResetStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike"></a>

```csharp
private void ResetStringLike()
```

##### `ResetStringNotEquals` <a name="ResetStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals"></a>

```csharp
private void ResetStringNotEquals()
```

##### `ResetStringNotLike` <a name="ResetStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike"></a>

```csharp
private void ResetStringNotLike()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals">StringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike">StringLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals">StringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike">StringNotLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput">StringEqualsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput">StringLikeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput">StringNotEqualsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput">StringNotLikeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StringEquals`<sup>Required</sup> <a name="StringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals"></a>

```csharp
public BackupBackupSelectionBackupSelectionConditionsStringEqualsList StringEquals { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a>

---

##### `StringLike`<sup>Required</sup> <a name="StringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike"></a>

```csharp
public BackupBackupSelectionBackupSelectionConditionsStringLikeList StringLike { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a>

---

##### `StringNotEquals`<sup>Required</sup> <a name="StringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals"></a>

```csharp
public BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList StringNotEquals { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a>

---

##### `StringNotLike`<sup>Required</sup> <a name="StringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike"></a>

```csharp
public BackupBackupSelectionBackupSelectionConditionsStringNotLikeList StringNotLike { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a>

---

##### `StringEqualsInput`<sup>Optional</sup> <a name="StringEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringEquals[] StringEqualsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

---

##### `StringLikeInput`<sup>Optional</sup> <a name="StringLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringLike[] StringLikeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

---

##### `StringNotEqualsInput`<sup>Optional</sup> <a name="StringNotEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] StringNotEqualsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

---

##### `StringNotLikeInput`<sup>Optional</sup> <a name="StringNotLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotLike[] StringNotLikeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringEqualsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get"></a>

```csharp
private BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringEquals[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey"></a>

```csharp
private void ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue"></a>

```csharp
private void ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput"></a>

```csharp
public string ConditionKeyInput { get; }
```

- *Type:* string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput"></a>

```csharp
public string ConditionValueInput { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringEquals InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringLikeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get"></a>

```csharp
private BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringLike[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey"></a>

```csharp
private void ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue"></a>

```csharp
private void ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput"></a>

```csharp
public string ConditionKeyInput { get; }
```

- *Type:* string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput"></a>

```csharp
public string ConditionValueInput { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringLike InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get"></a>

```csharp
private BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotEquals[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey"></a>

```csharp
private void ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue"></a>

```csharp
private void ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput"></a>

```csharp
public string ConditionKeyInput { get; }
```

- *Type:* string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput"></a>

```csharp
public string ConditionValueInput { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotEquals InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringNotLikeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get"></a>

```csharp
private BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotLike[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey"></a>

```csharp
private void ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue"></a>

```csharp
private void ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput"></a>

```csharp
public string ConditionKeyInput { get; }
```

- *Type:* string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput"></a>

```csharp
public string ConditionValueInput { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditionsStringNotLike InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>

---


### BackupBackupSelectionBackupSelectionListOfTagsList <a name="BackupBackupSelectionBackupSelectionListOfTagsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionListOfTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get"></a>

```csharp
private BackupBackupSelectionBackupSelectionListOfTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionListOfTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

---


### BackupBackupSelectionBackupSelectionListOfTagsOutputReference <a name="BackupBackupSelectionBackupSelectionListOfTagsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionListOfTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType">ResetConditionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey"></a>

```csharp
private void ResetConditionKey()
```

##### `ResetConditionType` <a name="ResetConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType"></a>

```csharp
private void ResetConditionType()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue"></a>

```csharp
private void ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput">ConditionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType">ConditionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput"></a>

```csharp
public string ConditionKeyInput { get; }
```

- *Type:* string

---

##### `ConditionTypeInput`<sup>Optional</sup> <a name="ConditionTypeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput"></a>

```csharp
public string ConditionTypeInput { get; }
```

- *Type:* string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput"></a>

```csharp
public string ConditionValueInput { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionType`<sup>Required</sup> <a name="ConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType"></a>

```csharp
public string ConditionType { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionListOfTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>

---


### BackupBackupSelectionBackupSelectionOutputReference <a name="BackupBackupSelectionBackupSelectionOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupSelectionBackupSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags">PutListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags">ResetListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources">ResetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions"></a>

```csharp
private void PutConditions(BackupBackupSelectionBackupSelectionConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `PutListOfTags` <a name="PutListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags"></a>

```csharp
private void PutListOfTags(IResolvable|BackupBackupSelectionBackupSelectionListOfTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetListOfTags` <a name="ResetListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags"></a>

```csharp
private void ResetListOfTags()
```

##### `ResetNotResources` <a name="ResetNotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources"></a>

```csharp
private void ResetNotResources()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags">ListOfTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput">ListOfTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput">NotResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput">SelectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources">NotResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName">SelectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions"></a>

```csharp
public BackupBackupSelectionBackupSelectionConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a>

---

##### `ListOfTags`<sup>Required</sup> <a name="ListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags"></a>

```csharp
public BackupBackupSelectionBackupSelectionListOfTagsList ListOfTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionConditions ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `ListOfTagsInput`<sup>Optional</sup> <a name="ListOfTagsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelectionListOfTags[] ListOfTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

---

##### `NotResourcesInput`<sup>Optional</sup> <a name="NotResourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput"></a>

```csharp
public string[] NotResourcesInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `SelectionNameInput`<sup>Optional</sup> <a name="SelectionNameInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput"></a>

```csharp
public string SelectionNameInput { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources"></a>

```csharp
public string[] NotResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `SelectionName`<sup>Required</sup> <a name="SelectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName"></a>

```csharp
public string SelectionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupSelectionBackupSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---



