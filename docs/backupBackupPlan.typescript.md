# `backupBackupPlan` Submodule <a name="`backupBackupPlan` Submodule" id="@cdktn/provider-awscc.backupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupPlan <a name="BackupBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan awscc_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlan(scope: Construct, id: string, config: BackupBackupPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig">BackupBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig">BackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan">putBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags">resetBackupPlanTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPlan` <a name="putBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan"></a>

```typescript
public putBackupPlan(value: BackupBackupPlanBackupPlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `resetBackupPlanTags` <a name="resetBackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags"></a>

```typescript
public resetBackupPlanTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

backupBackupPlan.BackupBackupPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

backupBackupPlan.BackupBackupPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

backupBackupPlan.BackupBackupPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

backupBackupPlan.BackupBackupPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan">backupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn">backupPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput">backupPlanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput">backupPlanTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags">backupPlanTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan"></a>

```typescript
public readonly backupPlan: BackupBackupPlanBackupPlanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a>

---

##### `backupPlanArn`<sup>Required</sup> <a name="backupPlanArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn"></a>

```typescript
public readonly backupPlanArn: string;
```

- *Type:* string

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `backupPlanInput`<sup>Optional</sup> <a name="backupPlanInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput"></a>

```typescript
public readonly backupPlanInput: IResolvable | BackupBackupPlanBackupPlan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `backupPlanTagsInput`<sup>Optional</sup> <a name="backupPlanTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput"></a>

```typescript
public readonly backupPlanTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupPlanTags`<sup>Required</sup> <a name="backupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags"></a>

```typescript
public readonly backupPlanTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupPlanBackupPlan <a name="BackupBackupPlanBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlan: backupBackupPlan.BackupBackupPlanBackupPlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName">backupPlanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule">backupPlanRule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings">advancedBackupSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings">scanSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}. |

---

##### `backupPlanName`<sup>Required</sup> <a name="backupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName"></a>

```typescript
public readonly backupPlanName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}.

---

##### `backupPlanRule`<sup>Required</sup> <a name="backupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule"></a>

```typescript
public readonly backupPlanRule: IResolvable | BackupBackupPlanBackupPlanBackupPlanRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}.

---

##### `advancedBackupSettings`<sup>Optional</sup> <a name="advancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings"></a>

```typescript
public readonly advancedBackupSettings: IResolvable | BackupBackupPlanBackupPlanAdvancedBackupSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}.

---

##### `scanSettings`<sup>Optional</sup> <a name="scanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings"></a>

```typescript
public readonly scanSettings: IResolvable | BackupBackupPlanBackupPlanScanSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}.

---

### BackupBackupPlanBackupPlanAdvancedBackupSettings <a name="BackupBackupPlanBackupPlanAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanAdvancedBackupSettings: backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions">backupOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}. |

---

##### `backupOptions`<sup>Optional</sup> <a name="backupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions"></a>

```typescript
public readonly backupOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}.

---

### BackupBackupPlanBackupPlanBackupPlanRule <a name="BackupBackupPlanBackupPlanBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanBackupPlanRule: backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault">targetBackupVault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes">completionWindowMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions">copyActions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions">indexActions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags">recoveryPointTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions">scanActions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes">startWindowMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn">targetLogicallyAirGappedBackupVaultArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}. |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}.

---

##### `targetBackupVault`<sup>Required</sup> <a name="targetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault"></a>

```typescript
public readonly targetBackupVault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}.

---

##### `completionWindowMinutes`<sup>Optional</sup> <a name="completionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes"></a>

```typescript
public readonly completionWindowMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}.

---

##### `copyActions`<sup>Optional</sup> <a name="copyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions"></a>

```typescript
public readonly copyActions: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}.

---

##### `enableContinuousBackup`<sup>Optional</sup> <a name="enableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup"></a>

```typescript
public readonly enableContinuousBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}.

---

##### `indexActions`<sup>Optional</sup> <a name="indexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions"></a>

```typescript
public readonly indexActions: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

##### `recoveryPointTags`<sup>Optional</sup> <a name="recoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags"></a>

```typescript
public readonly recoveryPointTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}.

---

##### `scanActions`<sup>Optional</sup> <a name="scanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions"></a>

```typescript
public readonly scanActions: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleScanActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}.

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}.

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}.

---

##### `startWindowMinutes`<sup>Optional</sup> <a name="startWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes"></a>

```typescript
public readonly startWindowMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}.

---

##### `targetLogicallyAirGappedBackupVaultArn`<sup>Optional</sup> <a name="targetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn"></a>

```typescript
public readonly targetLogicallyAirGappedBackupVaultArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanBackupPlanRuleCopyActions: backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn">destinationBackupVaultArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |

---

##### `destinationBackupVaultArn`<sup>Optional</sup> <a name="destinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn"></a>

```typescript
public readonly destinationBackupVaultArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle: backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `deleteAfterDays`<sup>Optional</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `moveToColdStorageAfterDays`<sup>Optional</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays"></a>

```typescript
public readonly moveToColdStorageAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `optInToArchiveForSupportedResources`<sup>Optional</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources"></a>

```typescript
public readonly optInToArchiveForSupportedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleIndexActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanBackupPlanRuleIndexActions: backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanBackupPlanRuleLifecycle: backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `deleteAfterDays`<sup>Optional</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `moveToColdStorageAfterDays`<sup>Optional</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays"></a>

```typescript
public readonly moveToColdStorageAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `optInToArchiveForSupportedResources`<sup>Optional</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources"></a>

```typescript
public readonly optInToArchiveForSupportedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleScanActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanBackupPlanRuleScanActions: backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner">malwareScanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode">scanMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}. |

---

##### `malwareScanner`<sup>Optional</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner"></a>

```typescript
public readonly malwareScanner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `scanMode`<sup>Optional</sup> <a name="scanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}.

---

### BackupBackupPlanBackupPlanScanSettings <a name="BackupBackupPlanBackupPlanScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanBackupPlanScanSettings: backupBackupPlan.BackupBackupPlanBackupPlanScanSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner">malwareScanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn">scannerRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}. |

---

##### `malwareScanner`<sup>Optional</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner"></a>

```typescript
public readonly malwareScanner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

##### `scannerRoleArn`<sup>Optional</sup> <a name="scannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn"></a>

```typescript
public readonly scannerRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}.

---

### BackupBackupPlanConfig <a name="BackupBackupPlanConfig" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

const backupBackupPlanConfig: backupBackupPlan.BackupBackupPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan">backupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags">backupPlanTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan"></a>

```typescript
public readonly backupPlan: BackupBackupPlanBackupPlan;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}.

---

##### `backupPlanTags`<sup>Optional</sup> <a name="backupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags"></a>

```typescript
public readonly backupPlanTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupPlanBackupPlanAdvancedBackupSettingsList <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get"></a>

```typescript
public get(index: number): BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanAdvancedBackupSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

---


### BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions">resetBackupOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupOptions` <a name="resetBackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions"></a>

```typescript
public resetBackupOptions(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput">backupOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions">backupOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupOptionsInput`<sup>Optional</sup> <a name="backupOptionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput"></a>

```typescript
public readonly backupOptionsInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `backupOptions`<sup>Required</sup> <a name="backupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions"></a>

```typescript
public readonly backupOptions: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanAdvancedBackupSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays">resetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays">resetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources">resetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteAfterDays` <a name="resetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays"></a>

```typescript
public resetDeleteAfterDays(): void
```

##### `resetMoveToColdStorageAfterDays` <a name="resetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```typescript
public resetMoveToColdStorageAfterDays(): void
```

##### `resetOptInToArchiveForSupportedResources` <a name="resetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```typescript
public resetOptInToArchiveForSupportedResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput">deleteAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">moveToColdStorageAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">optInToArchiveForSupportedResourcesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteAfterDaysInput`<sup>Optional</sup> <a name="deleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```typescript
public readonly deleteAfterDaysInput: number;
```

- *Type:* number

---

##### `moveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="moveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```typescript
public readonly moveToColdStorageAfterDaysInput: number;
```

- *Type:* number

---

##### `optInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="optInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```typescript
public readonly optInToArchiveForSupportedResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```typescript
public readonly moveToColdStorageAfterDays: number;
```

- *Type:* number

---

##### `optInToArchiveForSupportedResources`<sup>Required</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```typescript
public readonly optInToArchiveForSupportedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get"></a>

```typescript
public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn">resetDestinationBackupVaultArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLifecycle` <a name="putLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle"></a>

```typescript
public putLifecycle(value: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `resetDestinationBackupVaultArn` <a name="resetDestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn"></a>

```typescript
public resetDestinationBackupVaultArn(): void
```

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle"></a>

```typescript
public resetLifecycle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput">destinationBackupVaultArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn">destinationBackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a>

---

##### `destinationBackupVaultArnInput`<sup>Optional</sup> <a name="destinationBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput"></a>

```typescript
public readonly destinationBackupVaultArnInput: string;
```

- *Type:* string

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput"></a>

```typescript
public readonly lifecycleInput: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `destinationBackupVaultArn`<sup>Required</sup> <a name="destinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn"></a>

```typescript
public readonly destinationBackupVaultArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get"></a>

```typescript
public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleIndexActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays">resetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays">resetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources">resetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteAfterDays` <a name="resetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays"></a>

```typescript
public resetDeleteAfterDays(): void
```

##### `resetMoveToColdStorageAfterDays` <a name="resetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```typescript
public resetMoveToColdStorageAfterDays(): void
```

##### `resetOptInToArchiveForSupportedResources` <a name="resetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```typescript
public resetOptInToArchiveForSupportedResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput">deleteAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">moveToColdStorageAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">optInToArchiveForSupportedResourcesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteAfterDaysInput`<sup>Optional</sup> <a name="deleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```typescript
public readonly deleteAfterDaysInput: number;
```

- *Type:* number

---

##### `moveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="moveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```typescript
public readonly moveToColdStorageAfterDaysInput: number;
```

- *Type:* number

---

##### `optInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="optInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```typescript
public readonly optInToArchiveForSupportedResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```typescript
public readonly moveToColdStorageAfterDays: number;
```

- *Type:* number

---

##### `optInToArchiveForSupportedResources`<sup>Required</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```typescript
public readonly optInToArchiveForSupportedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleLifecycle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleList <a name="BackupBackupPlanBackupPlanBackupPlanRuleList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get"></a>

```typescript
public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions">putCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions">putIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle">putLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions">putScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes">resetCompletionWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions">resetCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup">resetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions">resetIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle">resetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags">resetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions">resetScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone">resetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes">resetStartWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn">resetTargetLogicallyAirGappedBackupVaultArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCopyActions` <a name="putCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions"></a>

```typescript
public putCopyActions(value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

---

##### `putIndexActions` <a name="putIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions"></a>

```typescript
public putIndexActions(value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

---

##### `putLifecycle` <a name="putLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle"></a>

```typescript
public putLifecycle(value: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `putScanActions` <a name="putScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions"></a>

```typescript
public putScanActions(value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleScanActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

---

##### `resetCompletionWindowMinutes` <a name="resetCompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes"></a>

```typescript
public resetCompletionWindowMinutes(): void
```

##### `resetCopyActions` <a name="resetCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions"></a>

```typescript
public resetCopyActions(): void
```

##### `resetEnableContinuousBackup` <a name="resetEnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```typescript
public resetEnableContinuousBackup(): void
```

##### `resetIndexActions` <a name="resetIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions"></a>

```typescript
public resetIndexActions(): void
```

##### `resetLifecycle` <a name="resetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle"></a>

```typescript
public resetLifecycle(): void
```

##### `resetRecoveryPointTags` <a name="resetRecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```typescript
public resetRecoveryPointTags(): void
```

##### `resetScanActions` <a name="resetScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions"></a>

```typescript
public resetScanActions(): void
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression"></a>

```typescript
public resetScheduleExpression(): void
```

##### `resetScheduleExpressionTimezone` <a name="resetScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone"></a>

```typescript
public resetScheduleExpressionTimezone(): void
```

##### `resetStartWindowMinutes` <a name="resetStartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes"></a>

```typescript
public resetStartWindowMinutes(): void
```

##### `resetTargetLogicallyAirGappedBackupVaultArn` <a name="resetTargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn"></a>

```typescript
public resetTargetLogicallyAirGappedBackupVaultArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions">copyActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions">indexActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions">scanActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput">completionWindowMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput">copyActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput">enableContinuousBackupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput">indexActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput">lifecycleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput">recoveryPointTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput">scanActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput">scheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput">startWindowMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput">targetBackupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput">targetLogicallyAirGappedBackupVaultArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes">completionWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags">recoveryPointTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes">startWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault">targetBackupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">targetLogicallyAirGappedBackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyActions`<sup>Required</sup> <a name="copyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions"></a>

```typescript
public readonly copyActions: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a>

---

##### `indexActions`<sup>Required</sup> <a name="indexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions"></a>

```typescript
public readonly indexActions: BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a>

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a>

---

##### `scanActions`<sup>Required</sup> <a name="scanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions"></a>

```typescript
public readonly scanActions: BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a>

---

##### `completionWindowMinutesInput`<sup>Optional</sup> <a name="completionWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput"></a>

```typescript
public readonly completionWindowMinutesInput: number;
```

- *Type:* number

---

##### `copyActionsInput`<sup>Optional</sup> <a name="copyActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput"></a>

```typescript
public readonly copyActionsInput: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>[]

---

##### `enableContinuousBackupInput`<sup>Optional</sup> <a name="enableContinuousBackupInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```typescript
public readonly enableContinuousBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `indexActionsInput`<sup>Optional</sup> <a name="indexActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput"></a>

```typescript
public readonly indexActionsInput: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleIndexActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>[]

---

##### `lifecycleInput`<sup>Optional</sup> <a name="lifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput"></a>

```typescript
public readonly lifecycleInput: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleLifecycle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `recoveryPointTagsInput`<sup>Optional</sup> <a name="recoveryPointTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```typescript
public readonly recoveryPointTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `scanActionsInput`<sup>Optional</sup> <a name="scanActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput"></a>

```typescript
public readonly scanActionsInput: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleScanActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```typescript
public readonly scheduleExpressionTimezoneInput: string;
```

- *Type:* string

---

##### `startWindowMinutesInput`<sup>Optional</sup> <a name="startWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput"></a>

```typescript
public readonly startWindowMinutesInput: number;
```

- *Type:* number

---

##### `targetBackupVaultInput`<sup>Optional</sup> <a name="targetBackupVaultInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput"></a>

```typescript
public readonly targetBackupVaultInput: string;
```

- *Type:* string

---

##### `targetLogicallyAirGappedBackupVaultArnInput`<sup>Optional</sup> <a name="targetLogicallyAirGappedBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput"></a>

```typescript
public readonly targetLogicallyAirGappedBackupVaultArnInput: string;
```

- *Type:* string

---

##### `completionWindowMinutes`<sup>Required</sup> <a name="completionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes"></a>

```typescript
public readonly completionWindowMinutes: number;
```

- *Type:* number

---

##### `enableContinuousBackup`<sup>Required</sup> <a name="enableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```typescript
public readonly enableContinuousBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recoveryPointTags`<sup>Required</sup> <a name="recoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```typescript
public readonly recoveryPointTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

---

##### `startWindowMinutes`<sup>Required</sup> <a name="startWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes"></a>

```typescript
public readonly startWindowMinutes: number;
```

- *Type:* number

---

##### `targetBackupVault`<sup>Required</sup> <a name="targetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault"></a>

```typescript
public readonly targetBackupVault: string;
```

- *Type:* string

---

##### `targetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="targetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```typescript
public readonly targetLogicallyAirGappedBackupVaultArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get"></a>

```typescript
public get(index: number): BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleScanActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>[]

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner">resetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode">resetScanMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMalwareScanner` <a name="resetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner"></a>

```typescript
public resetMalwareScanner(): void
```

##### `resetScanMode` <a name="resetScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode"></a>

```typescript
public resetScanMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput">malwareScannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput">scanModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner">malwareScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode">scanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `malwareScannerInput`<sup>Optional</sup> <a name="malwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput"></a>

```typescript
public readonly malwareScannerInput: string;
```

- *Type:* string

---

##### `scanModeInput`<sup>Optional</sup> <a name="scanModeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput"></a>

```typescript
public readonly scanModeInput: string;
```

- *Type:* string

---

##### `malwareScanner`<sup>Required</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner"></a>

```typescript
public readonly malwareScanner: string;
```

- *Type:* string

---

##### `scanMode`<sup>Required</sup> <a name="scanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleScanActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>

---


### BackupBackupPlanBackupPlanOutputReference <a name="BackupBackupPlanBackupPlanOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings">putAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule">putBackupPlanRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings">putScanSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings">resetAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings">resetScanSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedBackupSettings` <a name="putAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings"></a>

```typescript
public putAdvancedBackupSettings(value: IResolvable | BackupBackupPlanBackupPlanAdvancedBackupSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

---

##### `putBackupPlanRule` <a name="putBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule"></a>

```typescript
public putBackupPlanRule(value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

---

##### `putScanSettings` <a name="putScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings"></a>

```typescript
public putScanSettings(value: IResolvable | BackupBackupPlanBackupPlanScanSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

---

##### `resetAdvancedBackupSettings` <a name="resetAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings"></a>

```typescript
public resetAdvancedBackupSettings(): void
```

##### `resetScanSettings` <a name="resetScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings"></a>

```typescript
public resetScanSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings">advancedBackupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule">backupPlanRule</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings">scanSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput">advancedBackupSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput">backupPlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput">backupPlanRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput">scanSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName">backupPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedBackupSettings`<sup>Required</sup> <a name="advancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings"></a>

```typescript
public readonly advancedBackupSettings: BackupBackupPlanBackupPlanAdvancedBackupSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a>

---

##### `backupPlanRule`<sup>Required</sup> <a name="backupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule"></a>

```typescript
public readonly backupPlanRule: BackupBackupPlanBackupPlanBackupPlanRuleList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a>

---

##### `scanSettings`<sup>Required</sup> <a name="scanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings"></a>

```typescript
public readonly scanSettings: BackupBackupPlanBackupPlanScanSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a>

---

##### `advancedBackupSettingsInput`<sup>Optional</sup> <a name="advancedBackupSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput"></a>

```typescript
public readonly advancedBackupSettingsInput: IResolvable | BackupBackupPlanBackupPlanAdvancedBackupSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>[]

---

##### `backupPlanNameInput`<sup>Optional</sup> <a name="backupPlanNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput"></a>

```typescript
public readonly backupPlanNameInput: string;
```

- *Type:* string

---

##### `backupPlanRuleInput`<sup>Optional</sup> <a name="backupPlanRuleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput"></a>

```typescript
public readonly backupPlanRuleInput: IResolvable | BackupBackupPlanBackupPlanBackupPlanRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>[]

---

##### `scanSettingsInput`<sup>Optional</sup> <a name="scanSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput"></a>

```typescript
public readonly scanSettingsInput: IResolvable | BackupBackupPlanBackupPlanScanSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

---

##### `backupPlanName`<sup>Required</sup> <a name="backupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName"></a>

```typescript
public readonly backupPlanName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---


### BackupBackupPlanBackupPlanScanSettingsList <a name="BackupBackupPlanBackupPlanScanSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get"></a>

```typescript
public get(index: number): BackupBackupPlanBackupPlanScanSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanScanSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>[]

---


### BackupBackupPlanBackupPlanScanSettingsOutputReference <a name="BackupBackupPlanBackupPlanScanSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer"></a>

```typescript
import { backupBackupPlan } from '@cdktn/provider-awscc'

new backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner">resetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn">resetScannerRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMalwareScanner` <a name="resetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner"></a>

```typescript
public resetMalwareScanner(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```

##### `resetScannerRoleArn` <a name="resetScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn"></a>

```typescript
public resetScannerRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput">malwareScannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput">scannerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner">malwareScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn">scannerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `malwareScannerInput`<sup>Optional</sup> <a name="malwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput"></a>

```typescript
public readonly malwareScannerInput: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `scannerRoleArnInput`<sup>Optional</sup> <a name="scannerRoleArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput"></a>

```typescript
public readonly scannerRoleArnInput: string;
```

- *Type:* string

---

##### `malwareScanner`<sup>Required</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner"></a>

```typescript
public readonly malwareScanner: string;
```

- *Type:* string

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `scannerRoleArn`<sup>Required</sup> <a name="scannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn"></a>

```typescript
public readonly scannerRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupBackupPlanBackupPlanScanSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>

---



