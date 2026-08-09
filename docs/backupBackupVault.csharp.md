# `backupBackupVault` Submodule <a name="`backupBackupVault` Submodule" id="@cdktn/provider-awscc.backupBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupVault <a name="BackupBackupVault" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault awscc_backup_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupVault(Construct Scope, string Id, BackupBackupVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig">BackupBackupVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig">BackupBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration">PutLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetAccessPolicy">ResetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetBackupVaultTags">ResetBackupVaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetLockConfiguration">ResetLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetNotifications">ResetNotifications</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLockConfiguration` <a name="PutLockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration"></a>

```csharp
private void PutLockConfiguration(BackupBackupVaultLockConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications"></a>

```csharp
private void PutNotifications(BackupBackupVaultNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---

##### `ResetAccessPolicy` <a name="ResetAccessPolicy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetAccessPolicy"></a>

```csharp
private void ResetAccessPolicy()
```

##### `ResetBackupVaultTags` <a name="ResetBackupVaultTags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetBackupVaultTags"></a>

```csharp
private void ResetBackupVaultTags()
```

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetLockConfiguration` <a name="ResetLockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetLockConfiguration"></a>

```csharp
private void ResetLockConfiguration()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupBackupVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupBackupVault resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupBackupVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultArn">BackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfiguration">LockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference">BackupBackupVaultLockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notifications">Notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference">BackupBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicyInput">AccessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultNameInput">BackupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTagsInput">BackupVaultTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfigurationInput">LockConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notificationsInput">NotificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicy">AccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTags">BackupVaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupVaultArn`<sup>Required</sup> <a name="BackupVaultArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultArn"></a>

```csharp
public string BackupVaultArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LockConfiguration`<sup>Required</sup> <a name="LockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfiguration"></a>

```csharp
public BackupBackupVaultLockConfigurationOutputReference LockConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference">BackupBackupVaultLockConfigurationOutputReference</a>

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notifications"></a>

```csharp
public BackupBackupVaultNotificationsOutputReference Notifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference">BackupBackupVaultNotificationsOutputReference</a>

---

##### `AccessPolicyInput`<sup>Optional</sup> <a name="AccessPolicyInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicyInput"></a>

```csharp
public string AccessPolicyInput { get; }
```

- *Type:* string

---

##### `BackupVaultNameInput`<sup>Optional</sup> <a name="BackupVaultNameInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultNameInput"></a>

```csharp
public string BackupVaultNameInput { get; }
```

- *Type:* string

---

##### `BackupVaultTagsInput`<sup>Optional</sup> <a name="BackupVaultTagsInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupVaultTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `LockConfigurationInput`<sup>Optional</sup> <a name="LockConfigurationInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfigurationInput"></a>

```csharp
public IResolvable|BackupBackupVaultLockConfiguration LockConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notificationsInput"></a>

```csharp
public IResolvable|BackupBackupVaultNotifications NotificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicy"></a>

```csharp
public string AccessPolicy { get; }
```

- *Type:* string

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; }
```

- *Type:* string

---

##### `BackupVaultTags`<sup>Required</sup> <a name="BackupVaultTags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupVaultTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupVaultConfig <a name="BackupBackupVaultConfig" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupVaultConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupVaultName,
    string AccessPolicy = null,
    System.Collections.Generic.IDictionary<string, string> BackupVaultTags = null,
    string EncryptionKeyArn = null,
    BackupBackupVaultLockConfiguration LockConfiguration = null,
    BackupBackupVaultNotifications Notifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.accessPolicy">AccessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultTags">BackupVaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lockConfiguration">LockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}.

---

##### `AccessPolicy`<sup>Optional</sup> <a name="AccessPolicy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.accessPolicy"></a>

```csharp
public string AccessPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}.

---

##### `BackupVaultTags`<sup>Optional</sup> <a name="BackupVaultTags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupVaultTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}.

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}.

---

##### `LockConfiguration`<sup>Optional</sup> <a name="LockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lockConfiguration"></a>

```csharp
public BackupBackupVaultLockConfiguration LockConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.notifications"></a>

```csharp
public BackupBackupVaultNotifications Notifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}.

---

### BackupBackupVaultLockConfiguration <a name="BackupBackupVaultLockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupVaultLockConfiguration {
    double ChangeableForDays = null,
    double MaxRetentionDays = null,
    double MinRetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.changeableForDays">ChangeableForDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#changeable_for_days BackupBackupVault#changeable_for_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#max_retention_days BackupBackupVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.minRetentionDays">MinRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#min_retention_days BackupBackupVault#min_retention_days}. |

---

##### `ChangeableForDays`<sup>Optional</sup> <a name="ChangeableForDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.changeableForDays"></a>

```csharp
public double ChangeableForDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#changeable_for_days BackupBackupVault#changeable_for_days}.

---

##### `MaxRetentionDays`<sup>Optional</sup> <a name="MaxRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.maxRetentionDays"></a>

```csharp
public double MaxRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#max_retention_days BackupBackupVault#max_retention_days}.

---

##### `MinRetentionDays`<sup>Optional</sup> <a name="MinRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.minRetentionDays"></a>

```csharp
public double MinRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#min_retention_days BackupBackupVault#min_retention_days}.

---

### BackupBackupVaultNotifications <a name="BackupBackupVaultNotifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupVaultNotifications {
    string[] BackupVaultEvents = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.backupVaultEvents">BackupVaultEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_events BackupBackupVault#backup_vault_events}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#sns_topic_arn BackupBackupVault#sns_topic_arn}. |

---

##### `BackupVaultEvents`<sup>Optional</sup> <a name="BackupVaultEvents" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.backupVaultEvents"></a>

```csharp
public string[] BackupVaultEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#backup_vault_events BackupBackupVault#backup_vault_events}.

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_vault#sns_topic_arn BackupBackupVault#sns_topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupVaultLockConfigurationOutputReference <a name="BackupBackupVaultLockConfigurationOutputReference" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupVaultLockConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetChangeableForDays">ResetChangeableForDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMaxRetentionDays">ResetMaxRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMinRetentionDays">ResetMinRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeableForDays` <a name="ResetChangeableForDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetChangeableForDays"></a>

```csharp
private void ResetChangeableForDays()
```

##### `ResetMaxRetentionDays` <a name="ResetMaxRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMaxRetentionDays"></a>

```csharp
private void ResetMaxRetentionDays()
```

##### `ResetMinRetentionDays` <a name="ResetMinRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMinRetentionDays"></a>

```csharp
private void ResetMinRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDaysInput">ChangeableForDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDaysInput">MaxRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDaysInput">MinRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDays">ChangeableForDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDays">MinRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeableForDaysInput`<sup>Optional</sup> <a name="ChangeableForDaysInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDaysInput"></a>

```csharp
public double ChangeableForDaysInput { get; }
```

- *Type:* double

---

##### `MaxRetentionDaysInput`<sup>Optional</sup> <a name="MaxRetentionDaysInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDaysInput"></a>

```csharp
public double MaxRetentionDaysInput { get; }
```

- *Type:* double

---

##### `MinRetentionDaysInput`<sup>Optional</sup> <a name="MinRetentionDaysInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDaysInput"></a>

```csharp
public double MinRetentionDaysInput { get; }
```

- *Type:* double

---

##### `ChangeableForDays`<sup>Required</sup> <a name="ChangeableForDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDays"></a>

```csharp
public double ChangeableForDays { get; }
```

- *Type:* double

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDays"></a>

```csharp
public double MaxRetentionDays { get; }
```

- *Type:* double

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDays"></a>

```csharp
public double MinRetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupVaultLockConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---


### BackupBackupVaultNotificationsOutputReference <a name="BackupBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupBackupVaultNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetBackupVaultEvents">ResetBackupVaultEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupVaultEvents` <a name="ResetBackupVaultEvents" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetBackupVaultEvents"></a>

```csharp
private void ResetBackupVaultEvents()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEventsInput">BackupVaultEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEvents">BackupVaultEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupVaultEventsInput`<sup>Optional</sup> <a name="BackupVaultEventsInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEventsInput"></a>

```csharp
public string[] BackupVaultEventsInput { get; }
```

- *Type:* string[]

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `BackupVaultEvents`<sup>Required</sup> <a name="BackupVaultEvents" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```csharp
public string[] BackupVaultEvents { get; }
```

- *Type:* string[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupBackupVaultNotifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---



