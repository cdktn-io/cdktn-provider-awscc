# `backupBackupVault` Submodule <a name="`backupBackupVault` Submodule" id="@cdktn/provider-awscc.backupBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupVault <a name="BackupBackupVault" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault awscc_backup_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

new backupBackupVault.BackupBackupVault(scope: Construct, id: string, config: BackupBackupVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig">BackupBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig">BackupBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration">putLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetAccessPolicy">resetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetBackupVaultTags">resetBackupVaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetLockConfiguration">resetLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetNotifications">resetNotifications</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLockConfiguration` <a name="putLockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration"></a>

```typescript
public putLockConfiguration(value: BackupBackupVaultLockConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putLockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---

##### `putNotifications` <a name="putNotifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications"></a>

```typescript
public putNotifications(value: BackupBackupVaultNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---

##### `resetAccessPolicy` <a name="resetAccessPolicy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetAccessPolicy"></a>

```typescript
public resetAccessPolicy(): void
```

##### `resetBackupVaultTags` <a name="resetBackupVaultTags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetBackupVaultTags"></a>

```typescript
public resetBackupVaultTags(): void
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetEncryptionKeyArn"></a>

```typescript
public resetEncryptionKeyArn(): void
```

##### `resetLockConfiguration` <a name="resetLockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetLockConfiguration"></a>

```typescript
public resetLockConfiguration(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

backupBackupVault.BackupBackupVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

backupBackupVault.BackupBackupVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

backupBackupVault.BackupBackupVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

backupBackupVault.BackupBackupVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultArn">backupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfiguration">lockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference">BackupBackupVaultLockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference">BackupBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicyInput">accessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultNameInput">backupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTagsInput">backupVaultTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfigurationInput">lockConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notificationsInput">notificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicy">accessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTags">backupVaultTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupVaultArn`<sup>Required</sup> <a name="backupVaultArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultArn"></a>

```typescript
public readonly backupVaultArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lockConfiguration`<sup>Required</sup> <a name="lockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfiguration"></a>

```typescript
public readonly lockConfiguration: BackupBackupVaultLockConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference">BackupBackupVaultLockConfigurationOutputReference</a>

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notifications"></a>

```typescript
public readonly notifications: BackupBackupVaultNotificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference">BackupBackupVaultNotificationsOutputReference</a>

---

##### `accessPolicyInput`<sup>Optional</sup> <a name="accessPolicyInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicyInput"></a>

```typescript
public readonly accessPolicyInput: string;
```

- *Type:* string

---

##### `backupVaultNameInput`<sup>Optional</sup> <a name="backupVaultNameInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultNameInput"></a>

```typescript
public readonly backupVaultNameInput: string;
```

- *Type:* string

---

##### `backupVaultTagsInput`<sup>Optional</sup> <a name="backupVaultTagsInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTagsInput"></a>

```typescript
public readonly backupVaultTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArnInput"></a>

```typescript
public readonly encryptionKeyArnInput: string;
```

- *Type:* string

---

##### `lockConfigurationInput`<sup>Optional</sup> <a name="lockConfigurationInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.lockConfigurationInput"></a>

```typescript
public readonly lockConfigurationInput: IResolvable | BackupBackupVaultLockConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: IResolvable | BackupBackupVaultNotifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: string;
```

- *Type:* string

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

---

##### `backupVaultTags`<sup>Required</sup> <a name="backupVaultTags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.backupVaultTags"></a>

```typescript
public readonly backupVaultTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupVaultConfig <a name="BackupBackupVaultConfig" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.Initializer"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

const backupBackupVaultConfig: backupBackupVault.BackupBackupVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.accessPolicy">accessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultTags">backupVaultTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lockConfiguration">lockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#backup_vault_name BackupBackupVault#backup_vault_name}.

---

##### `accessPolicy`<sup>Optional</sup> <a name="accessPolicy" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#access_policy BackupBackupVault#access_policy}.

---

##### `backupVaultTags`<sup>Optional</sup> <a name="backupVaultTags" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.backupVaultTags"></a>

```typescript
public readonly backupVaultTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#backup_vault_tags BackupBackupVault#backup_vault_tags}.

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#encryption_key_arn BackupBackupVault#encryption_key_arn}.

---

##### `lockConfiguration`<sup>Optional</sup> <a name="lockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.lockConfiguration"></a>

```typescript
public readonly lockConfiguration: BackupBackupVaultLockConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#lock_configuration BackupBackupVault#lock_configuration}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultConfig.property.notifications"></a>

```typescript
public readonly notifications: BackupBackupVaultNotifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#notifications BackupBackupVault#notifications}.

---

### BackupBackupVaultLockConfiguration <a name="BackupBackupVaultLockConfiguration" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.Initializer"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

const backupBackupVaultLockConfiguration: backupBackupVault.BackupBackupVaultLockConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.changeableForDays">changeableForDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#changeable_for_days BackupBackupVault#changeable_for_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#max_retention_days BackupBackupVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.minRetentionDays">minRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#min_retention_days BackupBackupVault#min_retention_days}. |

---

##### `changeableForDays`<sup>Optional</sup> <a name="changeableForDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.changeableForDays"></a>

```typescript
public readonly changeableForDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#changeable_for_days BackupBackupVault#changeable_for_days}.

---

##### `maxRetentionDays`<sup>Optional</sup> <a name="maxRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#max_retention_days BackupBackupVault#max_retention_days}.

---

##### `minRetentionDays`<sup>Optional</sup> <a name="minRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration.property.minRetentionDays"></a>

```typescript
public readonly minRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#min_retention_days BackupBackupVault#min_retention_days}.

---

### BackupBackupVaultNotifications <a name="BackupBackupVaultNotifications" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.Initializer"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

const backupBackupVaultNotifications: backupBackupVault.BackupBackupVaultNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.backupVaultEvents">backupVaultEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#backup_vault_events BackupBackupVault#backup_vault_events}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#sns_topic_arn BackupBackupVault#sns_topic_arn}. |

---

##### `backupVaultEvents`<sup>Optional</sup> <a name="backupVaultEvents" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.backupVaultEvents"></a>

```typescript
public readonly backupVaultEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#backup_vault_events BackupBackupVault#backup_vault_events}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_backup_vault#sns_topic_arn BackupBackupVault#sns_topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupVaultLockConfigurationOutputReference <a name="BackupBackupVaultLockConfigurationOutputReference" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

new backupBackupVault.BackupBackupVaultLockConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetChangeableForDays">resetChangeableForDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMaxRetentionDays">resetMaxRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMinRetentionDays">resetMinRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangeableForDays` <a name="resetChangeableForDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetChangeableForDays"></a>

```typescript
public resetChangeableForDays(): void
```

##### `resetMaxRetentionDays` <a name="resetMaxRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMaxRetentionDays"></a>

```typescript
public resetMaxRetentionDays(): void
```

##### `resetMinRetentionDays` <a name="resetMinRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.resetMinRetentionDays"></a>

```typescript
public resetMinRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDaysInput">changeableForDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDaysInput">maxRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDaysInput">minRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDays">changeableForDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDays">minRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeableForDaysInput`<sup>Optional</sup> <a name="changeableForDaysInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDaysInput"></a>

```typescript
public readonly changeableForDaysInput: number;
```

- *Type:* number

---

##### `maxRetentionDaysInput`<sup>Optional</sup> <a name="maxRetentionDaysInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDaysInput"></a>

```typescript
public readonly maxRetentionDaysInput: number;
```

- *Type:* number

---

##### `minRetentionDaysInput`<sup>Optional</sup> <a name="minRetentionDaysInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDaysInput"></a>

```typescript
public readonly minRetentionDaysInput: number;
```

- *Type:* number

---

##### `changeableForDays`<sup>Required</sup> <a name="changeableForDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.changeableForDays"></a>

```typescript
public readonly changeableForDays: number;
```

- *Type:* number

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

---

##### `minRetentionDays`<sup>Required</sup> <a name="minRetentionDays" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.minRetentionDays"></a>

```typescript
public readonly minRetentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupVaultLockConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultLockConfiguration">BackupBackupVaultLockConfiguration</a>

---


### BackupBackupVaultNotificationsOutputReference <a name="BackupBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer"></a>

```typescript
import { backupBackupVault } from '@cdktn/provider-awscc'

new backupBackupVault.BackupBackupVaultNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetBackupVaultEvents">resetBackupVaultEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupVaultEvents` <a name="resetBackupVaultEvents" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetBackupVaultEvents"></a>

```typescript
public resetBackupVaultEvents(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEventsInput">backupVaultEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEvents">backupVaultEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupVaultEventsInput`<sup>Optional</sup> <a name="backupVaultEventsInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEventsInput"></a>

```typescript
public readonly backupVaultEventsInput: string[];
```

- *Type:* string[]

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `backupVaultEvents`<sup>Required</sup> <a name="backupVaultEvents" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```typescript
public readonly backupVaultEvents: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupVaultNotifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupVault.BackupBackupVaultNotifications">BackupBackupVaultNotifications</a>

---



