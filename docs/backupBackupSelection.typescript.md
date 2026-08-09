# `backupBackupSelection` Submodule <a name="`backupBackupSelection` Submodule" id="@cdktn/provider-awscc.backupBackupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupSelection <a name="BackupBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection awscc_backup_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelection(scope: Construct, id: string, config: BackupBackupSelectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig">BackupBackupSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig">BackupBackupSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection">putBackupSelection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupSelection` <a name="putBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection"></a>

```typescript
public putBackupSelection(value: BackupBackupSelectionBackupSelection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

backupBackupSelection.BackupBackupSelection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

backupBackupSelection.BackupBackupSelection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

backupBackupSelection.BackupBackupSelection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

backupBackupSelection.BackupBackupSelection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupBackupSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupBackupSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection">backupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId">backupSelectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId">selectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput">backupPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput">backupSelectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupSelection`<sup>Required</sup> <a name="backupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection"></a>

```typescript
public readonly backupSelection: BackupBackupSelectionBackupSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a>

---

##### `backupSelectionId`<sup>Required</sup> <a name="backupSelectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId"></a>

```typescript
public readonly backupSelectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selectionId`<sup>Required</sup> <a name="selectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId"></a>

```typescript
public readonly selectionId: string;
```

- *Type:* string

---

##### `backupPlanIdInput`<sup>Optional</sup> <a name="backupPlanIdInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput"></a>

```typescript
public readonly backupPlanIdInput: string;
```

- *Type:* string

---

##### `backupSelectionInput`<sup>Optional</sup> <a name="backupSelectionInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput"></a>

```typescript
public readonly backupSelectionInput: IResolvable | BackupBackupSelectionBackupSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupSelectionBackupSelection <a name="BackupBackupSelectionBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionBackupSelection: backupBackupSelection.BackupBackupSelectionBackupSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName">selectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags">listOfTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources">notResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}. |

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}.

---

##### `selectionName`<sup>Required</sup> <a name="selectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName"></a>

```typescript
public readonly selectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions"></a>

```typescript
public readonly conditions: BackupBackupSelectionBackupSelectionConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}.

---

##### `listOfTags`<sup>Optional</sup> <a name="listOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags"></a>

```typescript
public readonly listOfTags: IResolvable | BackupBackupSelectionBackupSelectionListOfTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}.

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}.

---

### BackupBackupSelectionBackupSelectionConditions <a name="BackupBackupSelectionBackupSelectionConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionBackupSelectionConditions: backupBackupSelection.BackupBackupSelectionBackupSelectionConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals">stringEquals</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike">stringLike</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals">stringNotEquals</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike">stringNotLike</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}. |

---

##### `stringEquals`<sup>Optional</sup> <a name="stringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals"></a>

```typescript
public readonly stringEquals: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}.

---

##### `stringLike`<sup>Optional</sup> <a name="stringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike"></a>

```typescript
public readonly stringLike: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringLike[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}.

---

##### `stringNotEquals`<sup>Optional</sup> <a name="stringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals"></a>

```typescript
public readonly stringNotEquals: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}.

---

##### `stringNotLike`<sup>Optional</sup> <a name="stringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike"></a>

```typescript
public readonly stringNotLike: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotLike[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}.

---

### BackupBackupSelectionBackupSelectionConditionsStringEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionBackupSelectionConditionsStringEquals: backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey">conditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue">conditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringLike <a name="BackupBackupSelectionBackupSelectionConditionsStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionBackupSelectionConditionsStringLike: backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey">conditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue">conditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionBackupSelectionConditionsStringNotEquals: backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey">conditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue">conditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotLike <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionBackupSelectionConditionsStringNotLike: backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey">conditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue">conditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionListOfTags <a name="BackupBackupSelectionBackupSelectionListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionBackupSelectionListOfTags: backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey">conditionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType">conditionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue">conditionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `conditionKey`<sup>Optional</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `conditionType`<sup>Optional</sup> <a name="conditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType"></a>

```typescript
public readonly conditionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}.

---

##### `conditionValue`<sup>Optional</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionConfig <a name="BackupBackupSelectionConfig" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

const backupBackupSelectionConfig: backupBackupSelection.BackupBackupSelectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection">backupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}.

---

##### `backupSelection`<sup>Required</sup> <a name="backupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection"></a>

```typescript
public readonly backupSelection: BackupBackupSelectionBackupSelection;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupSelectionBackupSelectionConditionsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals">putStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike">putStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals">putStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike">putStringNotLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals">resetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike">resetStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals">resetStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike">resetStringNotLike</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringEquals` <a name="putStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals"></a>

```typescript
public putStringEquals(value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

---

##### `putStringLike` <a name="putStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike"></a>

```typescript
public putStringLike(value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringLike[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

---

##### `putStringNotEquals` <a name="putStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals"></a>

```typescript
public putStringNotEquals(value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

---

##### `putStringNotLike` <a name="putStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike"></a>

```typescript
public putStringNotLike(value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotLike[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

---

##### `resetStringEquals` <a name="resetStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals"></a>

```typescript
public resetStringEquals(): void
```

##### `resetStringLike` <a name="resetStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike"></a>

```typescript
public resetStringLike(): void
```

##### `resetStringNotEquals` <a name="resetStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals"></a>

```typescript
public resetStringNotEquals(): void
```

##### `resetStringNotLike` <a name="resetStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike"></a>

```typescript
public resetStringNotLike(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals">stringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike">stringLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals">stringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike">stringNotLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput">stringEqualsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput">stringLikeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput">stringNotEqualsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput">stringNotLikeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringEquals`<sup>Required</sup> <a name="stringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals"></a>

```typescript
public readonly stringEquals: BackupBackupSelectionBackupSelectionConditionsStringEqualsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a>

---

##### `stringLike`<sup>Required</sup> <a name="stringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike"></a>

```typescript
public readonly stringLike: BackupBackupSelectionBackupSelectionConditionsStringLikeList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a>

---

##### `stringNotEquals`<sup>Required</sup> <a name="stringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals"></a>

```typescript
public readonly stringNotEquals: BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a>

---

##### `stringNotLike`<sup>Required</sup> <a name="stringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike"></a>

```typescript
public readonly stringNotLike: BackupBackupSelectionBackupSelectionConditionsStringNotLikeList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a>

---

##### `stringEqualsInput`<sup>Optional</sup> <a name="stringEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput"></a>

```typescript
public readonly stringEqualsInput: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

---

##### `stringLikeInput`<sup>Optional</sup> <a name="stringLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput"></a>

```typescript
public readonly stringLikeInput: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringLike[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

---

##### `stringNotEqualsInput`<sup>Optional</sup> <a name="stringNotEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput"></a>

```typescript
public readonly stringNotEqualsInput: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

---

##### `stringNotLikeInput`<sup>Optional</sup> <a name="stringNotLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput"></a>

```typescript
public readonly stringNotLikeInput: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotLike[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get"></a>

```typescript
public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey"></a>

```typescript
public resetConditionKey(): void
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue"></a>

```typescript
public resetConditionValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey">conditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue">conditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput"></a>

```typescript
public readonly conditionKeyInput: string;
```

- *Type:* string

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput"></a>

```typescript
public readonly conditionValueInput: string;
```

- *Type:* string

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringEquals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get"></a>

```typescript
public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringLike[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey"></a>

```typescript
public resetConditionKey(): void
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue"></a>

```typescript
public resetConditionValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey">conditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue">conditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput"></a>

```typescript
public readonly conditionKeyInput: string;
```

- *Type:* string

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput"></a>

```typescript
public readonly conditionValueInput: string;
```

- *Type:* string

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringLike;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get"></a>

```typescript
public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotEquals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey"></a>

```typescript
public resetConditionKey(): void
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue"></a>

```typescript
public resetConditionValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey">conditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue">conditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput"></a>

```typescript
public readonly conditionKeyInput: string;
```

- *Type:* string

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput"></a>

```typescript
public readonly conditionValueInput: string;
```

- *Type:* string

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotEquals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get"></a>

```typescript
public get(index: number): BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotLike[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>[]

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey"></a>

```typescript
public resetConditionKey(): void
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue"></a>

```typescript
public resetConditionValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey">conditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue">conditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput"></a>

```typescript
public readonly conditionKeyInput: string;
```

- *Type:* string

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput"></a>

```typescript
public readonly conditionValueInput: string;
```

- *Type:* string

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotLike;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>

---


### BackupBackupSelectionBackupSelectionListOfTagsList <a name="BackupBackupSelectionBackupSelectionListOfTagsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get"></a>

```typescript
public get(index: number): BackupBackupSelectionBackupSelectionListOfTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionListOfTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

---


### BackupBackupSelectionBackupSelectionListOfTagsOutputReference <a name="BackupBackupSelectionBackupSelectionListOfTagsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey">resetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType">resetConditionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue">resetConditionValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionKey` <a name="resetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey"></a>

```typescript
public resetConditionKey(): void
```

##### `resetConditionType` <a name="resetConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType"></a>

```typescript
public resetConditionType(): void
```

##### `resetConditionValue` <a name="resetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue"></a>

```typescript
public resetConditionValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput">conditionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput">conditionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput">conditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey">conditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType">conditionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue">conditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionKeyInput`<sup>Optional</sup> <a name="conditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput"></a>

```typescript
public readonly conditionKeyInput: string;
```

- *Type:* string

---

##### `conditionTypeInput`<sup>Optional</sup> <a name="conditionTypeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput"></a>

```typescript
public readonly conditionTypeInput: string;
```

- *Type:* string

---

##### `conditionValueInput`<sup>Optional</sup> <a name="conditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput"></a>

```typescript
public readonly conditionValueInput: string;
```

- *Type:* string

---

##### `conditionKey`<sup>Required</sup> <a name="conditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey"></a>

```typescript
public readonly conditionKey: string;
```

- *Type:* string

---

##### `conditionType`<sup>Required</sup> <a name="conditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType"></a>

```typescript
public readonly conditionType: string;
```

- *Type:* string

---

##### `conditionValue`<sup>Required</sup> <a name="conditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue"></a>

```typescript
public readonly conditionValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelectionListOfTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>

---


### BackupBackupSelectionBackupSelectionOutputReference <a name="BackupBackupSelectionBackupSelectionOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer"></a>

```typescript
import { backupBackupSelection } from '@cdktn/provider-awscc'

new backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags">putListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags">resetListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions"></a>

```typescript
public putConditions(value: BackupBackupSelectionBackupSelectionConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `putListOfTags` <a name="putListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags"></a>

```typescript
public putListOfTags(value: IResolvable | BackupBackupSelectionBackupSelectionListOfTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetListOfTags` <a name="resetListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags"></a>

```typescript
public resetListOfTags(): void
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources"></a>

```typescript
public resetNotResources(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags">listOfTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput">listOfTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput">notResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput">selectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources">notResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName">selectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions"></a>

```typescript
public readonly conditions: BackupBackupSelectionBackupSelectionConditionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a>

---

##### `listOfTags`<sup>Required</sup> <a name="listOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags"></a>

```typescript
public readonly listOfTags: BackupBackupSelectionBackupSelectionListOfTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | BackupBackupSelectionBackupSelectionConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `listOfTagsInput`<sup>Optional</sup> <a name="listOfTagsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput"></a>

```typescript
public readonly listOfTagsInput: IResolvable | BackupBackupSelectionBackupSelectionListOfTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>[]

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput"></a>

```typescript
public readonly notResourcesInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `selectionNameInput`<sup>Optional</sup> <a name="selectionNameInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput"></a>

```typescript
public readonly selectionNameInput: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `selectionName`<sup>Required</sup> <a name="selectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName"></a>

```typescript
public readonly selectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupSelectionBackupSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---



