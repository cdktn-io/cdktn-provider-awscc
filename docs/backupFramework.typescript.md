# `backupFramework` Submodule <a name="`backupFramework` Submodule" id="@cdktn/provider-awscc.backupFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupFramework <a name="BackupFramework" id="@cdktn/provider-awscc.backupFramework.BackupFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework awscc_backup_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFramework(scope: Construct, id: string, config: BackupFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig">BackupFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig">BackupFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkControls">putFrameworkControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkTags">putFrameworkTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkDescription">resetFrameworkDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkName">resetFrameworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkTags">resetFrameworkTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupFramework.BackupFramework.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupFramework.BackupFramework.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupFramework.BackupFramework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFrameworkControls` <a name="putFrameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkControls"></a>

```typescript
public putFrameworkControls(value: IResolvable | BackupFrameworkFrameworkControls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkControls.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>[]

---

##### `putFrameworkTags` <a name="putFrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkTags"></a>

```typescript
public putFrameworkTags(value: IResolvable | BackupFrameworkFrameworkTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>[]

---

##### `resetFrameworkDescription` <a name="resetFrameworkDescription" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkDescription"></a>

```typescript
public resetFrameworkDescription(): void
```

##### `resetFrameworkName` <a name="resetFrameworkName" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkName"></a>

```typescript
public resetFrameworkName(): void
```

##### `resetFrameworkTags` <a name="resetFrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkTags"></a>

```typescript
public resetFrameworkTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isConstruct"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

backupFramework.BackupFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformElement"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

backupFramework.BackupFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformResource"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

backupFramework.BackupFramework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

backupFramework.BackupFramework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.deploymentStatus">deploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkArn">frameworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControls">frameworkControls</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList">BackupFrameworkFrameworkControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkStatus">frameworkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTags">frameworkTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList">BackupFrameworkFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControlsInput">frameworkControlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescriptionInput">frameworkDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkNameInput">frameworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTagsInput">frameworkTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescription">frameworkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkName">frameworkName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deploymentStatus`<sup>Required</sup> <a name="deploymentStatus" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.deploymentStatus"></a>

```typescript
public readonly deploymentStatus: string;
```

- *Type:* string

---

##### `frameworkArn`<sup>Required</sup> <a name="frameworkArn" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkArn"></a>

```typescript
public readonly frameworkArn: string;
```

- *Type:* string

---

##### `frameworkControls`<sup>Required</sup> <a name="frameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControls"></a>

```typescript
public readonly frameworkControls: BackupFrameworkFrameworkControlsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList">BackupFrameworkFrameworkControlsList</a>

---

##### `frameworkStatus`<sup>Required</sup> <a name="frameworkStatus" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkStatus"></a>

```typescript
public readonly frameworkStatus: string;
```

- *Type:* string

---

##### `frameworkTags`<sup>Required</sup> <a name="frameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTags"></a>

```typescript
public readonly frameworkTags: BackupFrameworkFrameworkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList">BackupFrameworkFrameworkTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frameworkControlsInput`<sup>Optional</sup> <a name="frameworkControlsInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControlsInput"></a>

```typescript
public readonly frameworkControlsInput: IResolvable | BackupFrameworkFrameworkControls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>[]

---

##### `frameworkDescriptionInput`<sup>Optional</sup> <a name="frameworkDescriptionInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescriptionInput"></a>

```typescript
public readonly frameworkDescriptionInput: string;
```

- *Type:* string

---

##### `frameworkNameInput`<sup>Optional</sup> <a name="frameworkNameInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkNameInput"></a>

```typescript
public readonly frameworkNameInput: string;
```

- *Type:* string

---

##### `frameworkTagsInput`<sup>Optional</sup> <a name="frameworkTagsInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTagsInput"></a>

```typescript
public readonly frameworkTagsInput: IResolvable | BackupFrameworkFrameworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>[]

---

##### `frameworkDescription`<sup>Required</sup> <a name="frameworkDescription" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescription"></a>

```typescript
public readonly frameworkDescription: string;
```

- *Type:* string

---

##### `frameworkName`<sup>Required</sup> <a name="frameworkName" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkName"></a>

```typescript
public readonly frameworkName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupFrameworkConfig <a name="BackupFrameworkConfig" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

const backupFrameworkConfig: backupFramework.BackupFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkControls">frameworkControls</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>[]</code> | Contains detailed information about all of the controls of a framework. Each framework must contain at least one control. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkDescription">frameworkDescription</a></code> | <code>string</code> | An optional description of the framework with a maximum 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkName">frameworkName</a></code> | <code>string</code> | The unique name of a framework. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkTags">frameworkTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>[]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `frameworkControls`<sup>Required</sup> <a name="frameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkControls"></a>

```typescript
public readonly frameworkControls: IResolvable | BackupFrameworkFrameworkControls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>[]

Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#framework_controls BackupFramework#framework_controls}

---

##### `frameworkDescription`<sup>Optional</sup> <a name="frameworkDescription" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkDescription"></a>

```typescript
public readonly frameworkDescription: string;
```

- *Type:* string

An optional description of the framework with a maximum 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#framework_description BackupFramework#framework_description}

---

##### `frameworkName`<sup>Optional</sup> <a name="frameworkName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkName"></a>

```typescript
public readonly frameworkName: string;
```

- *Type:* string

The unique name of a framework.

This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#framework_name BackupFramework#framework_name}

---

##### `frameworkTags`<sup>Optional</sup> <a name="frameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkTags"></a>

```typescript
public readonly frameworkTags: IResolvable | BackupFrameworkFrameworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>[]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#framework_tags BackupFramework#framework_tags}

---

### BackupFrameworkFrameworkControls <a name="BackupFrameworkFrameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

const backupFrameworkFrameworkControls: backupFramework.BackupFrameworkFrameworkControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlName">controlName</a></code> | <code>string</code> | The name of a control. This name is between 1 and 256 characters. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlInputParameters">controlInputParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>[]</code> | A list of ParameterName and ParameterValue pairs. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlScope">controlScope</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a></code> | The scope of a control. |

---

##### `controlName`<sup>Required</sup> <a name="controlName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlName"></a>

```typescript
public readonly controlName: string;
```

- *Type:* string

The name of a control. This name is between 1 and 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#control_name BackupFramework#control_name}

---

##### `controlInputParameters`<sup>Optional</sup> <a name="controlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlInputParameters"></a>

```typescript
public readonly controlInputParameters: IResolvable | BackupFrameworkFrameworkControlsControlInputParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>[]

A list of ParameterName and ParameterValue pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#control_input_parameters BackupFramework#control_input_parameters}

---

##### `controlScope`<sup>Optional</sup> <a name="controlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlScope"></a>

```typescript
public readonly controlScope: BackupFrameworkFrameworkControlsControlScope;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a>

The scope of a control.

The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#control_scope BackupFramework#control_scope}

---

### BackupFrameworkFrameworkControlsControlInputParameters <a name="BackupFrameworkFrameworkControlsControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

const backupFrameworkFrameworkControlsControlInputParameters: backupFramework.BackupFrameworkFrameworkControlsControlInputParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterName">parameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#parameter_name BackupFramework#parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterValue">parameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#parameter_value BackupFramework#parameter_value}. |

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#parameter_name BackupFramework#parameter_name}.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#parameter_value BackupFramework#parameter_value}.

---

### BackupFrameworkFrameworkControlsControlScope <a name="BackupFrameworkFrameworkControlsControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

const backupFrameworkFrameworkControlsControlScope: backupFramework.BackupFrameworkFrameworkControlsControlScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceIds">complianceResourceIds</a></code> | <code>string[]</code> | The ID of the only AWS resource that you want your control scope to contain. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceTypes">complianceResourceTypes</a></code> | <code>string[]</code> | Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>[]</code> | Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair. |

---

##### `complianceResourceIds`<sup>Optional</sup> <a name="complianceResourceIds" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceIds"></a>

```typescript
public readonly complianceResourceIds: string[];
```

- *Type:* string[]

The ID of the only AWS resource that you want your control scope to contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#compliance_resource_ids BackupFramework#compliance_resource_ids}

---

##### `complianceResourceTypes`<sup>Optional</sup> <a name="complianceResourceTypes" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceTypes"></a>

```typescript
public readonly complianceResourceTypes: string[];
```

- *Type:* string[]

Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#compliance_resource_types BackupFramework#compliance_resource_types}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.tags"></a>

```typescript
public readonly tags: IResolvable | BackupFrameworkFrameworkControlsControlScopeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>[]

Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#tags BackupFramework#tags}

---

### BackupFrameworkFrameworkControlsControlScopeTags <a name="BackupFrameworkFrameworkControlsControlScopeTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

const backupFrameworkFrameworkControlsControlScopeTags: backupFramework.BackupFrameworkFrameworkControlsControlScopeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#key BackupFramework#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#value BackupFramework#value}

---

### BackupFrameworkFrameworkTags <a name="BackupFrameworkFrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

const backupFrameworkFrameworkTags: backupFramework.BackupFrameworkFrameworkTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#key BackupFramework#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/backup_framework#value BackupFramework#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupFrameworkFrameworkControlsControlInputParametersList <a name="BackupFrameworkFrameworkControlsControlInputParametersList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.get"></a>

```typescript
public get(index: number): BackupFrameworkFrameworkControlsControlInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkControlsControlInputParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>[]

---


### BackupFrameworkFrameworkControlsControlInputParametersOutputReference <a name="BackupFrameworkFrameworkControlsControlInputParametersOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterName"></a>

```typescript
public resetParameterName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkControlsControlInputParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>

---


### BackupFrameworkFrameworkControlsControlScopeOutputReference <a name="BackupFrameworkFrameworkControlsControlScopeOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceIds">resetComplianceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceTypes">resetComplianceResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | BackupFrameworkFrameworkControlsControlScopeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>[]

---

##### `resetComplianceResourceIds` <a name="resetComplianceResourceIds" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceIds"></a>

```typescript
public resetComplianceResourceIds(): void
```

##### `resetComplianceResourceTypes` <a name="resetComplianceResourceTypes" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceTypes"></a>

```typescript
public resetComplianceResourceTypes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList">BackupFrameworkFrameworkControlsControlScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIdsInput">complianceResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypesInput">complianceResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds">complianceResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes">complianceResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags"></a>

```typescript
public readonly tags: BackupFrameworkFrameworkControlsControlScopeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList">BackupFrameworkFrameworkControlsControlScopeTagsList</a>

---

##### `complianceResourceIdsInput`<sup>Optional</sup> <a name="complianceResourceIdsInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIdsInput"></a>

```typescript
public readonly complianceResourceIdsInput: string[];
```

- *Type:* string[]

---

##### `complianceResourceTypesInput`<sup>Optional</sup> <a name="complianceResourceTypesInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypesInput"></a>

```typescript
public readonly complianceResourceTypesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BackupFrameworkFrameworkControlsControlScopeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>[]

---

##### `complianceResourceIds`<sup>Required</sup> <a name="complianceResourceIds" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds"></a>

```typescript
public readonly complianceResourceIds: string[];
```

- *Type:* string[]

---

##### `complianceResourceTypes`<sup>Required</sup> <a name="complianceResourceTypes" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes"></a>

```typescript
public readonly complianceResourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkControlsControlScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a>

---


### BackupFrameworkFrameworkControlsControlScopeTagsList <a name="BackupFrameworkFrameworkControlsControlScopeTagsList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.get"></a>

```typescript
public get(index: number): BackupFrameworkFrameworkControlsControlScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkControlsControlScopeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>[]

---


### BackupFrameworkFrameworkControlsControlScopeTagsOutputReference <a name="BackupFrameworkFrameworkControlsControlScopeTagsOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkControlsControlScopeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags">BackupFrameworkFrameworkControlsControlScopeTags</a>

---


### BackupFrameworkFrameworkControlsList <a name="BackupFrameworkFrameworkControlsList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkControlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.get"></a>

```typescript
public get(index: number): BackupFrameworkFrameworkControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkControls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>[]

---


### BackupFrameworkFrameworkControlsOutputReference <a name="BackupFrameworkFrameworkControlsOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlInputParameters">putControlInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlScope">putControlScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlInputParameters">resetControlInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlScope">resetControlScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlInputParameters` <a name="putControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlInputParameters"></a>

```typescript
public putControlInputParameters(value: IResolvable | BackupFrameworkFrameworkControlsControlInputParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlInputParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>[]

---

##### `putControlScope` <a name="putControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlScope"></a>

```typescript
public putControlScope(value: BackupFrameworkFrameworkControlsControlScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a>

---

##### `resetControlInputParameters` <a name="resetControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlInputParameters"></a>

```typescript
public resetControlInputParameters(): void
```

##### `resetControlScope` <a name="resetControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlScope"></a>

```typescript
public resetControlScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters">controlInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList">BackupFrameworkFrameworkControlsControlInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScope">controlScope</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference">BackupFrameworkFrameworkControlsControlScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParametersInput">controlInputParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlNameInput">controlNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScopeInput">controlScopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlName">controlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlInputParameters`<sup>Required</sup> <a name="controlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters"></a>

```typescript
public readonly controlInputParameters: BackupFrameworkFrameworkControlsControlInputParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList">BackupFrameworkFrameworkControlsControlInputParametersList</a>

---

##### `controlScope`<sup>Required</sup> <a name="controlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScope"></a>

```typescript
public readonly controlScope: BackupFrameworkFrameworkControlsControlScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference">BackupFrameworkFrameworkControlsControlScopeOutputReference</a>

---

##### `controlInputParametersInput`<sup>Optional</sup> <a name="controlInputParametersInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParametersInput"></a>

```typescript
public readonly controlInputParametersInput: IResolvable | BackupFrameworkFrameworkControlsControlInputParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters">BackupFrameworkFrameworkControlsControlInputParameters</a>[]

---

##### `controlNameInput`<sup>Optional</sup> <a name="controlNameInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlNameInput"></a>

```typescript
public readonly controlNameInput: string;
```

- *Type:* string

---

##### `controlScopeInput`<sup>Optional</sup> <a name="controlScopeInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScopeInput"></a>

```typescript
public readonly controlScopeInput: IResolvable | BackupFrameworkFrameworkControlsControlScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a>

---

##### `controlName`<sup>Required</sup> <a name="controlName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlName"></a>

```typescript
public readonly controlName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkControls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls">BackupFrameworkFrameworkControls</a>

---


### BackupFrameworkFrameworkTagsList <a name="BackupFrameworkFrameworkTagsList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.get"></a>

```typescript
public get(index: number): BackupFrameworkFrameworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>[]

---


### BackupFrameworkFrameworkTagsOutputReference <a name="BackupFrameworkFrameworkTagsOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer"></a>

```typescript
import { backupFramework } from '@cdktn/provider-awscc'

new backupFramework.BackupFrameworkFrameworkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupFrameworkFrameworkTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags">BackupFrameworkFrameworkTags</a>

---



