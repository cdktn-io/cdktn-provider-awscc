# `backupLogicallyAirGappedBackupVault` Submodule <a name="`backupLogicallyAirGappedBackupVault` Submodule" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLogicallyAirGappedBackupVault <a name="BackupLogicallyAirGappedBackupVault" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

new backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault(scope: Construct, id: string, config: BackupLogicallyAirGappedBackupVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig">BackupLogicallyAirGappedBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig">BackupLogicallyAirGappedBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetAccessPolicy">resetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetBackupVaultTags">resetBackupVaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetMpaApprovalTeamArn">resetMpaApprovalTeamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetNotifications">resetNotifications</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotifications` <a name="putNotifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications"></a>

```typescript
public putNotifications(value: BackupLogicallyAirGappedBackupVaultNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---

##### `resetAccessPolicy` <a name="resetAccessPolicy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetAccessPolicy"></a>

```typescript
public resetAccessPolicy(): void
```

##### `resetBackupVaultTags` <a name="resetBackupVaultTags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetBackupVaultTags"></a>

```typescript
public resetBackupVaultTags(): void
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetEncryptionKeyArn"></a>

```typescript
public resetEncryptionKeyArn(): void
```

##### `resetMpaApprovalTeamArn` <a name="resetMpaApprovalTeamArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetMpaApprovalTeamArn"></a>

```typescript
public resetMpaApprovalTeamArn(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupLogicallyAirGappedBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupLogicallyAirGappedBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupLogicallyAirGappedBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultArn">backupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference">BackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultState">vaultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultType">vaultType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicyInput">accessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultNameInput">backupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTagsInput">backupVaultTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDaysInput">maxRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDaysInput">minRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArnInput">mpaApprovalTeamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notificationsInput">notificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicy">accessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTags">backupVaultTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDays">minRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn">mpaApprovalTeamArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupVaultArn`<sup>Required</sup> <a name="backupVaultArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultArn"></a>

```typescript
public readonly backupVaultArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notifications"></a>

```typescript
public readonly notifications: BackupLogicallyAirGappedBackupVaultNotificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference">BackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a>

---

##### `vaultState`<sup>Required</sup> <a name="vaultState" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultState"></a>

```typescript
public readonly vaultState: string;
```

- *Type:* string

---

##### `vaultType`<sup>Required</sup> <a name="vaultType" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.vaultType"></a>

```typescript
public readonly vaultType: string;
```

- *Type:* string

---

##### `accessPolicyInput`<sup>Optional</sup> <a name="accessPolicyInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicyInput"></a>

```typescript
public readonly accessPolicyInput: string;
```

- *Type:* string

---

##### `backupVaultNameInput`<sup>Optional</sup> <a name="backupVaultNameInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultNameInput"></a>

```typescript
public readonly backupVaultNameInput: string;
```

- *Type:* string

---

##### `backupVaultTagsInput`<sup>Optional</sup> <a name="backupVaultTagsInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTagsInput"></a>

```typescript
public readonly backupVaultTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArnInput"></a>

```typescript
public readonly encryptionKeyArnInput: string;
```

- *Type:* string

---

##### `maxRetentionDaysInput`<sup>Optional</sup> <a name="maxRetentionDaysInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDaysInput"></a>

```typescript
public readonly maxRetentionDaysInput: number;
```

- *Type:* number

---

##### `minRetentionDaysInput`<sup>Optional</sup> <a name="minRetentionDaysInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDaysInput"></a>

```typescript
public readonly minRetentionDaysInput: number;
```

- *Type:* number

---

##### `mpaApprovalTeamArnInput`<sup>Optional</sup> <a name="mpaApprovalTeamArnInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArnInput"></a>

```typescript
public readonly mpaApprovalTeamArnInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: IResolvable | BackupLogicallyAirGappedBackupVaultNotifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: string;
```

- *Type:* string

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

---

##### `backupVaultTags`<sup>Required</sup> <a name="backupVaultTags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.backupVaultTags"></a>

```typescript
public readonly backupVaultTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

---

##### `minRetentionDays`<sup>Required</sup> <a name="minRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.minRetentionDays"></a>

```typescript
public readonly minRetentionDays: number;
```

- *Type:* number

---

##### `mpaApprovalTeamArn`<sup>Required</sup> <a name="mpaApprovalTeamArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn"></a>

```typescript
public readonly mpaApprovalTeamArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLogicallyAirGappedBackupVaultConfig <a name="BackupLogicallyAirGappedBackupVaultConfig" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.Initializer"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

const backupLogicallyAirGappedBackupVaultConfig: backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.minRetentionDays">minRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.accessPolicy">accessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultTags">backupVaultTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.mpaApprovalTeamArn">mpaApprovalTeamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_name BackupLogicallyAirGappedBackupVault#backup_vault_name}.

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#max_retention_days BackupLogicallyAirGappedBackupVault#max_retention_days}.

---

##### `minRetentionDays`<sup>Required</sup> <a name="minRetentionDays" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.minRetentionDays"></a>

```typescript
public readonly minRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#min_retention_days BackupLogicallyAirGappedBackupVault#min_retention_days}.

---

##### `accessPolicy`<sup>Optional</sup> <a name="accessPolicy" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#access_policy BackupLogicallyAirGappedBackupVault#access_policy}.

---

##### `backupVaultTags`<sup>Optional</sup> <a name="backupVaultTags" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.backupVaultTags"></a>

```typescript
public readonly backupVaultTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_tags BackupLogicallyAirGappedBackupVault#backup_vault_tags}.

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#encryption_key_arn BackupLogicallyAirGappedBackupVault#encryption_key_arn}.

---

##### `mpaApprovalTeamArn`<sup>Optional</sup> <a name="mpaApprovalTeamArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.mpaApprovalTeamArn"></a>

```typescript
public readonly mpaApprovalTeamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#mpa_approval_team_arn BackupLogicallyAirGappedBackupVault#mpa_approval_team_arn}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultConfig.property.notifications"></a>

```typescript
public readonly notifications: BackupLogicallyAirGappedBackupVaultNotifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#notifications BackupLogicallyAirGappedBackupVault#notifications}.

---

### BackupLogicallyAirGappedBackupVaultNotifications <a name="BackupLogicallyAirGappedBackupVaultNotifications" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.Initializer"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

const backupLogicallyAirGappedBackupVaultNotifications: backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.backupVaultEvents">backupVaultEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_events BackupLogicallyAirGappedBackupVault#backup_vault_events}. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#sns_topic_arn BackupLogicallyAirGappedBackupVault#sns_topic_arn}. |

---

##### `backupVaultEvents`<sup>Optional</sup> <a name="backupVaultEvents" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.backupVaultEvents"></a>

```typescript
public readonly backupVaultEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#backup_vault_events BackupLogicallyAirGappedBackupVault#backup_vault_events}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_logically_air_gapped_backup_vault#sns_topic_arn BackupLogicallyAirGappedBackupVault#sns_topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLogicallyAirGappedBackupVaultNotificationsOutputReference <a name="BackupLogicallyAirGappedBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer"></a>

```typescript
import { backupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

new backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetBackupVaultEvents">resetBackupVaultEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupVaultEvents` <a name="resetBackupVaultEvents" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetBackupVaultEvents"></a>

```typescript
public resetBackupVaultEvents(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEventsInput">backupVaultEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents">backupVaultEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupVaultEventsInput`<sup>Optional</sup> <a name="backupVaultEventsInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEventsInput"></a>

```typescript
public readonly backupVaultEventsInput: string[];
```

- *Type:* string[]

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `backupVaultEvents`<sup>Required</sup> <a name="backupVaultEvents" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```typescript
public readonly backupVaultEvents: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupLogicallyAirGappedBackupVaultNotifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLogicallyAirGappedBackupVault.BackupLogicallyAirGappedBackupVaultNotifications">BackupLogicallyAirGappedBackupVaultNotifications</a>

---



