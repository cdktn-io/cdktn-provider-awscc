# `backupTieringConfiguration` Submodule <a name="`backupTieringConfiguration` Submodule" id="@cdktn/provider-awscc.backupTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupTieringConfiguration <a name="BackupTieringConfiguration" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration awscc_backup_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

new backupTieringConfiguration.BackupTieringConfiguration(scope: Construct, id: string, config: BackupTieringConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig">BackupTieringConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig">BackupTieringConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection">putResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags">resetTieringConfigurationTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceSelection` <a name="putResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection"></a>

```typescript
public putResourceSelection(value: IResolvable | BackupTieringConfigurationResourceSelection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

---

##### `resetTieringConfigurationTags` <a name="resetTieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags"></a>

```typescript
public resetTieringConfigurationTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

backupTieringConfiguration.BackupTieringConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupTieringConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupTieringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupTieringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn">tieringConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput">backupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput">resourceSelectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput">tieringConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput">tieringConfigurationTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName">tieringConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags">tieringConfigurationTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection"></a>

```typescript
public readonly resourceSelection: BackupTieringConfigurationResourceSelectionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a>

---

##### `tieringConfigurationArn`<sup>Required</sup> <a name="tieringConfigurationArn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn"></a>

```typescript
public readonly tieringConfigurationArn: string;
```

- *Type:* string

---

##### `backupVaultNameInput`<sup>Optional</sup> <a name="backupVaultNameInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput"></a>

```typescript
public readonly backupVaultNameInput: string;
```

- *Type:* string

---

##### `resourceSelectionInput`<sup>Optional</sup> <a name="resourceSelectionInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput"></a>

```typescript
public readonly resourceSelectionInput: IResolvable | BackupTieringConfigurationResourceSelection[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

---

##### `tieringConfigurationNameInput`<sup>Optional</sup> <a name="tieringConfigurationNameInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput"></a>

```typescript
public readonly tieringConfigurationNameInput: string;
```

- *Type:* string

---

##### `tieringConfigurationTagsInput`<sup>Optional</sup> <a name="tieringConfigurationTagsInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput"></a>

```typescript
public readonly tieringConfigurationTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

---

##### `tieringConfigurationName`<sup>Required</sup> <a name="tieringConfigurationName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName"></a>

```typescript
public readonly tieringConfigurationName: string;
```

- *Type:* string

---

##### `tieringConfigurationTags`<sup>Required</sup> <a name="tieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags"></a>

```typescript
public readonly tieringConfigurationTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupTieringConfigurationConfig <a name="BackupTieringConfigurationConfig" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.Initializer"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

const backupTieringConfigurationConfig: backupTieringConfiguration.BackupTieringConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection">resourceSelection</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName">tieringConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags">tieringConfigurationTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}.

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection"></a>

```typescript
public readonly resourceSelection: IResolvable | BackupTieringConfigurationResourceSelection[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}.

---

##### `tieringConfigurationName`<sup>Required</sup> <a name="tieringConfigurationName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName"></a>

```typescript
public readonly tieringConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}.

---

##### `tieringConfigurationTags`<sup>Optional</sup> <a name="tieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags"></a>

```typescript
public readonly tieringConfigurationTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}.

---

### BackupTieringConfigurationResourceSelection <a name="BackupTieringConfigurationResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.Initializer"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

const backupTieringConfigurationResourceSelection: backupTieringConfiguration.BackupTieringConfigurationResourceSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays">tieringDownSettingsInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}.

---

##### `tieringDownSettingsInDays`<sup>Required</sup> <a name="tieringDownSettingsInDays" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays"></a>

```typescript
public readonly tieringDownSettingsInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupTieringConfigurationResourceSelectionList <a name="BackupTieringConfigurationResourceSelectionList" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

new backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get"></a>

```typescript
public get(index: number): BackupTieringConfigurationResourceSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupTieringConfigurationResourceSelection[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

---


### BackupTieringConfigurationResourceSelectionOutputReference <a name="BackupTieringConfigurationResourceSelectionOutputReference" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer"></a>

```typescript
import { backupTieringConfiguration } from '@cdktn/provider-awscc'

new backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput">tieringDownSettingsInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays">tieringDownSettingsInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tieringDownSettingsInDaysInput`<sup>Optional</sup> <a name="tieringDownSettingsInDaysInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput"></a>

```typescript
public readonly tieringDownSettingsInDaysInput: number;
```

- *Type:* number

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tieringDownSettingsInDays`<sup>Required</sup> <a name="tieringDownSettingsInDays" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays"></a>

```typescript
public readonly tieringDownSettingsInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupTieringConfigurationResourceSelection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>

---



