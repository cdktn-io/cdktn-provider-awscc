# `backupLegalHold` Submodule <a name="`backupLegalHold` Submodule" id="@cdktn/provider-awscc.backupLegalHold"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLegalHold <a name="BackupLegalHold" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold awscc_backup_legal_hold}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

new backupLegalHold.BackupLegalHold(scope: Construct, id: string, config: BackupLegalHoldConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig">BackupLegalHoldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig">BackupLegalHoldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection">putRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecoveryPointSelection` <a name="putRecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection"></a>

```typescript
public putRecoveryPointSelection(value: BackupLegalHoldRecoveryPointSelection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags"></a>

```typescript
public putTags(value: IResolvable | BackupLegalHoldTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

backupLegalHold.BackupLegalHold.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

backupLegalHold.BackupLegalHold.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

backupLegalHold.BackupLegalHold.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

backupLegalHold.BackupLegalHold.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupLegalHold to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupLegalHold that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupLegalHold to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId">legalHoldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection">recoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput">recoveryPointSelectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `legalHoldId`<sup>Required</sup> <a name="legalHoldId" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId"></a>

```typescript
public readonly legalHoldId: string;
```

- *Type:* string

---

##### `recoveryPointSelection`<sup>Required</sup> <a name="recoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection"></a>

```typescript
public readonly recoveryPointSelection: BackupLegalHoldRecoveryPointSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags"></a>

```typescript
public readonly tags: BackupLegalHoldTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `recoveryPointSelectionInput`<sup>Optional</sup> <a name="recoveryPointSelectionInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput"></a>

```typescript
public readonly recoveryPointSelectionInput: IResolvable | BackupLegalHoldRecoveryPointSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BackupLegalHoldTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLegalHoldConfig <a name="BackupLegalHoldConfig" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

const backupLegalHoldConfig: backupLegalHold.BackupLegalHoldConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description">description</a></code> | <code>string</code> | The description of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection">recoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | The criteria to assign a set of resources, such as resource types or backup vaults. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title">title</a></code> | <code>string</code> | The title of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]</code> | Optional tags to include. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#description BackupLegalHold#description}

---

##### `recoveryPointSelection`<sup>Required</sup> <a name="recoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection"></a>

```typescript
public readonly recoveryPointSelection: BackupLegalHoldRecoveryPointSelection;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

The criteria to assign a set of resources, such as resource types or backup vaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#recovery_point_selection BackupLegalHold#recovery_point_selection}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#title BackupLegalHold#title}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BackupLegalHoldTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

Optional tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#tags BackupLegalHold#tags}

---

### BackupLegalHoldRecoveryPointSelection <a name="BackupLegalHoldRecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

const backupLegalHoldRecoveryPointSelection: backupLegalHold.BackupLegalHoldRecoveryPointSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange">dateRange</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | A date range for filtering recovery points. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers">resourceIdentifiers</a></code> | <code>string[]</code> | The resources included in the resource selection. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames">vaultNames</a></code> | <code>string[]</code> | The names of the vaults in which the selected recovery points are contained. |

---

##### `dateRange`<sup>Optional</sup> <a name="dateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange"></a>

```typescript
public readonly dateRange: BackupLegalHoldRecoveryPointSelectionDateRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

A date range for filtering recovery points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#date_range BackupLegalHold#date_range}

---

##### `resourceIdentifiers`<sup>Optional</sup> <a name="resourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers"></a>

```typescript
public readonly resourceIdentifiers: string[];
```

- *Type:* string[]

The resources included in the resource selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#resource_identifiers BackupLegalHold#resource_identifiers}

---

##### `vaultNames`<sup>Optional</sup> <a name="vaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames"></a>

```typescript
public readonly vaultNames: string[];
```

- *Type:* string[]

The names of the vaults in which the selected recovery points are contained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#vault_names BackupLegalHold#vault_names}

---

### BackupLegalHoldRecoveryPointSelectionDateRange <a name="BackupLegalHoldRecoveryPointSelectionDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

const backupLegalHoldRecoveryPointSelectionDateRange: backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate">fromDate</a></code> | <code>string</code> | The beginning date, inclusive. ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate">toDate</a></code> | <code>string</code> | The end date, inclusive. ISO 8601 date-time. |

---

##### `fromDate`<sup>Optional</sup> <a name="fromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate"></a>

```typescript
public readonly fromDate: string;
```

- *Type:* string

The beginning date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#from_date BackupLegalHold#from_date}

---

##### `toDate`<sup>Optional</sup> <a name="toDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate"></a>

```typescript
public readonly toDate: string;
```

- *Type:* string

The end date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#to_date BackupLegalHold#to_date}

---

### BackupLegalHoldTags <a name="BackupLegalHoldTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

const backupLegalHoldTags: backupLegalHold.BackupLegalHoldTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#key BackupLegalHold#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_legal_hold#value BackupLegalHold#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference <a name="BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

new backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate">resetFromDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate">resetToDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromDate` <a name="resetFromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate"></a>

```typescript
public resetFromDate(): void
```

##### `resetToDate` <a name="resetToDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate"></a>

```typescript
public resetToDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput">fromDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput">toDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate">fromDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate">toDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromDateInput`<sup>Optional</sup> <a name="fromDateInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput"></a>

```typescript
public readonly fromDateInput: string;
```

- *Type:* string

---

##### `toDateInput`<sup>Optional</sup> <a name="toDateInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput"></a>

```typescript
public readonly toDateInput: string;
```

- *Type:* string

---

##### `fromDate`<sup>Required</sup> <a name="fromDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate"></a>

```typescript
public readonly fromDate: string;
```

- *Type:* string

---

##### `toDate`<sup>Required</sup> <a name="toDate" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate"></a>

```typescript
public readonly toDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupLegalHoldRecoveryPointSelectionDateRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---


### BackupLegalHoldRecoveryPointSelectionOutputReference <a name="BackupLegalHoldRecoveryPointSelectionOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

new backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange">putDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange">resetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers">resetResourceIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames">resetVaultNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRange` <a name="putDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange"></a>

```typescript
public putDateRange(value: BackupLegalHoldRecoveryPointSelectionDateRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---

##### `resetDateRange` <a name="resetDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange"></a>

```typescript
public resetDateRange(): void
```

##### `resetResourceIdentifiers` <a name="resetResourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers"></a>

```typescript
public resetResourceIdentifiers(): void
```

##### `resetVaultNames` <a name="resetVaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames"></a>

```typescript
public resetVaultNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput">dateRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput">resourceIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput">vaultNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers">resourceIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames">vaultNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange"></a>

```typescript
public readonly dateRange: BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a>

---

##### `dateRangeInput`<sup>Optional</sup> <a name="dateRangeInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput"></a>

```typescript
public readonly dateRangeInput: IResolvable | BackupLegalHoldRecoveryPointSelectionDateRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---

##### `resourceIdentifiersInput`<sup>Optional</sup> <a name="resourceIdentifiersInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput"></a>

```typescript
public readonly resourceIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `vaultNamesInput`<sup>Optional</sup> <a name="vaultNamesInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput"></a>

```typescript
public readonly vaultNamesInput: string[];
```

- *Type:* string[]

---

##### `resourceIdentifiers`<sup>Required</sup> <a name="resourceIdentifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers"></a>

```typescript
public readonly resourceIdentifiers: string[];
```

- *Type:* string[]

---

##### `vaultNames`<sup>Required</sup> <a name="vaultNames" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames"></a>

```typescript
public readonly vaultNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupLegalHoldRecoveryPointSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---


### BackupLegalHoldTagsList <a name="BackupLegalHoldTagsList" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

new backupLegalHold.BackupLegalHoldTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get"></a>

```typescript
public get(index: number): BackupLegalHoldTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupLegalHoldTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>[]

---


### BackupLegalHoldTagsOutputReference <a name="BackupLegalHoldTagsOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer"></a>

```typescript
import { backupLegalHold } from '@cdktn/provider-awscc'

new backupLegalHold.BackupLegalHoldTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupLegalHoldTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>

---



