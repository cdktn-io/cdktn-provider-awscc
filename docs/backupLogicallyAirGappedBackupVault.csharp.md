# `backupLogicallyAirGappedBackupVault` Submodule <a name="`backupLogicallyAirGappedBackupVault` Submodule" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLogicallyAirGappedBackupVault <a name="BackupLogicallyAirGappedBackupVault" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLogicallyAirGappedBackupVault(Construct Scope, string Id, BackupLogicallyAirGappedBackupVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig">BackupLogicallyAirGappedBackupVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig">BackupLogicallyAirGappedBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetAccessPolicy">ResetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetBackupVaultTags">ResetBackupVaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetMpaApprovalTeamArn">ResetMpaApprovalTeamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetNotifications">ResetNotifications</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications"></a>

```csharp
private void PutNotifications(BackupLogicallyAirGappedBackupVaultNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---

##### `ResetAccessPolicy` <a name="ResetAccessPolicy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetAccessPolicy"></a>

```csharp
private void ResetAccessPolicy()
```

##### `ResetBackupVaultTags` <a name="ResetBackupVaultTags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetBackupVaultTags"></a>

```csharp
private void ResetBackupVaultTags()
```

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetMpaApprovalTeamArn` <a name="ResetMpaApprovalTeamArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetMpaApprovalTeamArn"></a>

```csharp
private void ResetMpaApprovalTeamArn()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLogicallyAirGappedBackupVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLogicallyAirGappedBackupVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLogicallyAirGappedBackupVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupLogicallyAirGappedBackupVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupLogicallyAirGappedBackupVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupLogicallyAirGappedBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupLogicallyAirGappedBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultArn">BackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notifications">Notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference">BackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultState">VaultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultType">VaultType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicyInput">AccessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultNameInput">BackupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTagsInput">BackupVaultTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDaysInput">MaxRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDaysInput">MinRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArnInput">MpaApprovalTeamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notificationsInput">NotificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicy">AccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTags">BackupVaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDays">MinRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn">MpaApprovalTeamArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupVaultArn`<sup>Required</sup> <a name="BackupVaultArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultArn"></a>

```csharp
public string BackupVaultArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notifications"></a>

```csharp
public BackupLogicallyAirGappedBackupVaultNotificationsOutputReference Notifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference">BackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a>

---

##### `VaultState`<sup>Required</sup> <a name="VaultState" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultState"></a>

```csharp
public string VaultState { get; }
```

- *Type:* string

---

##### `VaultType`<sup>Required</sup> <a name="VaultType" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultType"></a>

```csharp
public string VaultType { get; }
```

- *Type:* string

---

##### `AccessPolicyInput`<sup>Optional</sup> <a name="AccessPolicyInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicyInput"></a>

```csharp
public string AccessPolicyInput { get; }
```

- *Type:* string

---

##### `BackupVaultNameInput`<sup>Optional</sup> <a name="BackupVaultNameInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultNameInput"></a>

```csharp
public string BackupVaultNameInput { get; }
```

- *Type:* string

---

##### `BackupVaultTagsInput`<sup>Optional</sup> <a name="BackupVaultTagsInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupVaultTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `MaxRetentionDaysInput`<sup>Optional</sup> <a name="MaxRetentionDaysInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDaysInput"></a>

```csharp
public double MaxRetentionDaysInput { get; }
```

- *Type:* double

---

##### `MinRetentionDaysInput`<sup>Optional</sup> <a name="MinRetentionDaysInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDaysInput"></a>

```csharp
public double MinRetentionDaysInput { get; }
```

- *Type:* double

---

##### `MpaApprovalTeamArnInput`<sup>Optional</sup> <a name="MpaApprovalTeamArnInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArnInput"></a>

```csharp
public string MpaApprovalTeamArnInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notificationsInput"></a>

```csharp
public IResolvable|BackupLogicallyAirGappedBackupVaultNotifications NotificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicy"></a>

```csharp
public string AccessPolicy { get; }
```

- *Type:* string

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; }
```

- *Type:* string

---

##### `BackupVaultTags`<sup>Required</sup> <a name="BackupVaultTags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupVaultTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDays"></a>

```csharp
public double MaxRetentionDays { get; }
```

- *Type:* double

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDays"></a>

```csharp
public double MinRetentionDays { get; }
```

- *Type:* double

---

##### `MpaApprovalTeamArn`<sup>Required</sup> <a name="MpaApprovalTeamArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn"></a>

```csharp
public string MpaApprovalTeamArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLogicallyAirGappedBackupVaultConfig <a name="BackupLogicallyAirGappedBackupVaultConfig" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLogicallyAirGappedBackupVaultConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupVaultName,
    double MaxRetentionDays,
    double MinRetentionDays,
    string AccessPolicy = null,
    System.Collections.Generic.IDictionary<string, string> BackupVaultTags = null,
    string EncryptionKeyArn = null,
    string MpaApprovalTeamArn = null,
    BackupLogicallyAirGappedBackupVaultNotifications Notifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.minRetentionDays">MinRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.accessPolicy">AccessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultTags">BackupVaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.mpaApprovalTeamArn">MpaApprovalTeamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}.

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.maxRetentionDays"></a>

```csharp
public double MaxRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}.

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.minRetentionDays"></a>

```csharp
public double MinRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}.

---

##### `AccessPolicy`<sup>Optional</sup> <a name="AccessPolicy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.accessPolicy"></a>

```csharp
public string AccessPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}.

---

##### `BackupVaultTags`<sup>Optional</sup> <a name="BackupVaultTags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupVaultTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}.

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}.

---

##### `MpaApprovalTeamArn`<sup>Optional</sup> <a name="MpaApprovalTeamArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.mpaApprovalTeamArn"></a>

```csharp
public string MpaApprovalTeamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.notifications"></a>

```csharp
public BackupLogicallyAirGappedBackupVaultNotifications Notifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}.

---

### BackupLogicallyAirGappedBackupVaultNotifications <a name="BackupLogicallyAirGappedBackupVaultNotifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLogicallyAirGappedBackupVaultNotifications {
    string[] BackupVaultEvents = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.backupVaultEvents">BackupVaultEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_events BackupLogicallyAirGappedBackupVault#backup_vault_events}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#sns_topic_arn BackupLogicallyAirGappedBackupVault#sns_topic_arn}. |

---

##### `BackupVaultEvents`<sup>Optional</sup> <a name="BackupVaultEvents" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.backupVaultEvents"></a>

```csharp
public string[] BackupVaultEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_events BackupLogicallyAirGappedBackupVault#backup_vault_events}.

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#sns_topic_arn BackupLogicallyAirGappedBackupVault#sns_topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLogicallyAirGappedBackupVaultNotificationsOutputReference <a name="BackupLogicallyAirGappedBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupLogicallyAirGappedBackupVaultNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetBackupVaultEvents">ResetBackupVaultEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupVaultEvents` <a name="ResetBackupVaultEvents" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetBackupVaultEvents"></a>

```csharp
private void ResetBackupVaultEvents()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEventsInput">BackupVaultEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents">BackupVaultEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupVaultEventsInput`<sup>Optional</sup> <a name="BackupVaultEventsInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEventsInput"></a>

```csharp
public string[] BackupVaultEventsInput { get; }
```

- *Type:* string[]

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `BackupVaultEvents`<sup>Required</sup> <a name="BackupVaultEvents" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```csharp
public string[] BackupVaultEvents { get; }
```

- *Type:* string[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupLogicallyAirGappedBackupVaultNotifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---



