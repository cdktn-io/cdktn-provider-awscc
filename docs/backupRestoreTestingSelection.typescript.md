# `backupRestoreTestingSelection` Submodule <a name="`backupRestoreTestingSelection` Submodule" id="@cdktn/provider-awscc.backupRestoreTestingSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingSelection <a name="BackupRestoreTestingSelection" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection awscc_backup_restore_testing_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

new backupRestoreTestingSelection.BackupRestoreTestingSelection(scope: Construct, id: string, config: BackupRestoreTestingSelectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig">BackupRestoreTestingSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig">BackupRestoreTestingSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions">putProtectedResourceConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns">resetProtectedResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions">resetProtectedResourceConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides">resetRestoreMetadataOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours">resetValidationWindowHours</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProtectedResourceConditions` <a name="putProtectedResourceConditions" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions"></a>

```typescript
public putProtectedResourceConditions(value: BackupRestoreTestingSelectionProtectedResourceConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>

---

##### `resetProtectedResourceArns` <a name="resetProtectedResourceArns" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns"></a>

```typescript
public resetProtectedResourceArns(): void
```

##### `resetProtectedResourceConditions` <a name="resetProtectedResourceConditions" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions"></a>

```typescript
public resetProtectedResourceConditions(): void
```

##### `resetRestoreMetadataOverrides` <a name="resetRestoreMetadataOverrides" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides"></a>

```typescript
public resetRestoreMetadataOverrides(): void
```

##### `resetValidationWindowHours` <a name="resetValidationWindowHours" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours"></a>

```typescript
public resetValidationWindowHours(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupRestoreTestingSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupRestoreTestingSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions">protectedResourceConditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference">BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput">protectedResourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput">protectedResourceConditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput">protectedResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput">restoreMetadataOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput">restoreTestingPlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingSelectionNameInput">restoreTestingSelectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput">validationWindowHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns">protectedResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType">protectedResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides">restoreMetadataOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingSelectionName">restoreTestingSelectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours">validationWindowHours</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protectedResourceConditions`<sup>Required</sup> <a name="protectedResourceConditions" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions"></a>

```typescript
public readonly protectedResourceConditions: BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference">BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference</a>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `protectedResourceArnsInput`<sup>Optional</sup> <a name="protectedResourceArnsInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput"></a>

```typescript
public readonly protectedResourceArnsInput: string[];
```

- *Type:* string[]

---

##### `protectedResourceConditionsInput`<sup>Optional</sup> <a name="protectedResourceConditionsInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput"></a>

```typescript
public readonly protectedResourceConditionsInput: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>

---

##### `protectedResourceTypeInput`<sup>Optional</sup> <a name="protectedResourceTypeInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput"></a>

```typescript
public readonly protectedResourceTypeInput: string;
```

- *Type:* string

---

##### `restoreMetadataOverridesInput`<sup>Optional</sup> <a name="restoreMetadataOverridesInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput"></a>

```typescript
public readonly restoreMetadataOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restoreTestingPlanNameInput`<sup>Optional</sup> <a name="restoreTestingPlanNameInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput"></a>

```typescript
public readonly restoreTestingPlanNameInput: string;
```

- *Type:* string

---

##### `restoreTestingSelectionNameInput`<sup>Optional</sup> <a name="restoreTestingSelectionNameInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingSelectionNameInput"></a>

```typescript
public readonly restoreTestingSelectionNameInput: string;
```

- *Type:* string

---

##### `validationWindowHoursInput`<sup>Optional</sup> <a name="validationWindowHoursInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput"></a>

```typescript
public readonly validationWindowHoursInput: number;
```

- *Type:* number

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `protectedResourceArns`<sup>Required</sup> <a name="protectedResourceArns" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns"></a>

```typescript
public readonly protectedResourceArns: string[];
```

- *Type:* string[]

---

##### `protectedResourceType`<sup>Required</sup> <a name="protectedResourceType" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType"></a>

```typescript
public readonly protectedResourceType: string;
```

- *Type:* string

---

##### `restoreMetadataOverrides`<sup>Required</sup> <a name="restoreMetadataOverrides" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides"></a>

```typescript
public readonly restoreMetadataOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName"></a>

```typescript
public readonly restoreTestingPlanName: string;
```

- *Type:* string

---

##### `restoreTestingSelectionName`<sup>Required</sup> <a name="restoreTestingSelectionName" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingSelectionName"></a>

```typescript
public readonly restoreTestingSelectionName: string;
```

- *Type:* string

---

##### `validationWindowHours`<sup>Required</sup> <a name="validationWindowHours" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours"></a>

```typescript
public readonly validationWindowHours: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingSelectionConfig <a name="BackupRestoreTestingSelectionConfig" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

const backupRestoreTestingSelectionConfig: backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType">protectedResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingSelectionName">restoreTestingSelectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#restore_testing_selection_name BackupRestoreTestingSelection#restore_testing_selection_name}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns">protectedResourceArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions">protectedResourceConditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides">restoreMetadataOverrides</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours">validationWindowHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}.

---

##### `protectedResourceType`<sup>Required</sup> <a name="protectedResourceType" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType"></a>

```typescript
public readonly protectedResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}.

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName"></a>

```typescript
public readonly restoreTestingPlanName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}.

---

##### `restoreTestingSelectionName`<sup>Required</sup> <a name="restoreTestingSelectionName" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingSelectionName"></a>

```typescript
public readonly restoreTestingSelectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#restore_testing_selection_name BackupRestoreTestingSelection#restore_testing_selection_name}.

---

##### `protectedResourceArns`<sup>Optional</sup> <a name="protectedResourceArns" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns"></a>

```typescript
public readonly protectedResourceArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}.

---

##### `protectedResourceConditions`<sup>Optional</sup> <a name="protectedResourceConditions" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions"></a>

```typescript
public readonly protectedResourceConditions: BackupRestoreTestingSelectionProtectedResourceConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}.

---

##### `restoreMetadataOverrides`<sup>Optional</sup> <a name="restoreMetadataOverrides" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides"></a>

```typescript
public readonly restoreMetadataOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}.

---

##### `validationWindowHours`<sup>Optional</sup> <a name="validationWindowHours" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours"></a>

```typescript
public readonly validationWindowHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}.

---

### BackupRestoreTestingSelectionProtectedResourceConditions <a name="BackupRestoreTestingSelectionProtectedResourceConditions" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

const backupRestoreTestingSelectionProtectedResourceConditions: backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals">stringEquals</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals">stringNotEquals</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}. |

---

##### `stringEquals`<sup>Optional</sup> <a name="stringEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals"></a>

```typescript
public readonly stringEquals: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}.

---

##### `stringNotEquals`<sup>Optional</sup> <a name="stringNotEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals"></a>

```typescript
public readonly stringNotEquals: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}.

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

const backupRestoreTestingSelectionProtectedResourceConditionsStringEquals: backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

const backupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals: backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

new backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals">putStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals">putStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals">resetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals">resetStringNotEquals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringEquals` <a name="putStringEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals"></a>

```typescript
public putStringEquals(value: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>[]

---

##### `putStringNotEquals` <a name="putStringNotEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals"></a>

```typescript
public putStringNotEquals(value: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>[]

---

##### `resetStringEquals` <a name="resetStringEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals"></a>

```typescript
public resetStringEquals(): void
```

##### `resetStringNotEquals` <a name="resetStringNotEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals"></a>

```typescript
public resetStringNotEquals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals">stringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals">stringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput">stringEqualsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput">stringNotEqualsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringEquals`<sup>Required</sup> <a name="stringEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals"></a>

```typescript
public readonly stringEquals: BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a>

---

##### `stringNotEquals`<sup>Required</sup> <a name="stringNotEquals" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals"></a>

```typescript
public readonly stringNotEquals: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a>

---

##### `stringEqualsInput`<sup>Optional</sup> <a name="stringEqualsInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput"></a>

```typescript
public readonly stringEqualsInput: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>[]

---

##### `stringNotEqualsInput`<sup>Optional</sup> <a name="stringNotEqualsInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput"></a>

```typescript
public readonly stringNotEqualsInput: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

new backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get"></a>

```typescript
public get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>[]

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

new backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

new backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get"></a>

```typescript
public get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>[]

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer"></a>

```typescript
import { backupRestoreTestingSelection } from '@cdktn/provider-awscc'

new backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>

---



