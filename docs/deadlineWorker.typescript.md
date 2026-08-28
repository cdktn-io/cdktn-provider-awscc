# `deadlineWorker` Submodule <a name="`deadlineWorker` Submodule" id="@cdktn/provider-awscc.deadlineWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineWorker <a name="DeadlineWorker" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker awscc_deadline_worker}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

new deadlineWorker.DeadlineWorker(scope: Construct, id: string, config: DeadlineWorkerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig">DeadlineWorkerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig">DeadlineWorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putHostProperties">putHostProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetHostProperties">resetHostProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHostProperties` <a name="putHostProperties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putHostProperties"></a>

```typescript
public putHostProperties(value: DeadlineWorkerHostProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putHostProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putTags"></a>

```typescript
public putTags(value: IResolvable | DeadlineWorkerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>[]

---

##### `resetHostProperties` <a name="resetHostProperties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetHostProperties"></a>

```typescript
public resetHostProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineWorker resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isConstruct"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

deadlineWorker.DeadlineWorker.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformElement"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

deadlineWorker.DeadlineWorker.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformResource"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

deadlineWorker.DeadlineWorker.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

deadlineWorker.DeadlineWorker.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DeadlineWorker resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeadlineWorker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeadlineWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostProperties">hostProperties</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference">DeadlineWorkerHostPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList">DeadlineWorkerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.workerId">workerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmIdInput">farmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostPropertiesInput">hostPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmId">farmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `hostProperties`<sup>Required</sup> <a name="hostProperties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostProperties"></a>

```typescript
public readonly hostProperties: DeadlineWorkerHostPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference">DeadlineWorkerHostPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tags"></a>

```typescript
public readonly tags: DeadlineWorkerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList">DeadlineWorkerTagsList</a>

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

---

##### `farmIdInput`<sup>Optional</sup> <a name="farmIdInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmIdInput"></a>

```typescript
public readonly farmIdInput: string;
```

- *Type:* string

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `hostPropertiesInput`<sup>Optional</sup> <a name="hostPropertiesInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostPropertiesInput"></a>

```typescript
public readonly hostPropertiesInput: IResolvable | DeadlineWorkerHostProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DeadlineWorkerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>[]

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineWorkerConfig <a name="DeadlineWorkerConfig" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

const deadlineWorkerConfig: deadlineWorker.DeadlineWorkerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.farmId">farmId</a></code> | <code>string</code> | The farm ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.fleetId">fleetId</a></code> | <code>string</code> | The fleet ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.hostProperties">hostProperties</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a></code> | The IP address and host name of the worker. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The farm ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#farm_id DeadlineWorker#farm_id}

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The fleet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#fleet_id DeadlineWorker#fleet_id}

---

##### `hostProperties`<sup>Optional</sup> <a name="hostProperties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.hostProperties"></a>

```typescript
public readonly hostProperties: DeadlineWorkerHostProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

The IP address and host name of the worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#host_properties DeadlineWorker#host_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DeadlineWorkerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#tags DeadlineWorker#tags}

---

### DeadlineWorkerHostProperties <a name="DeadlineWorkerHostProperties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

const deadlineWorkerHostProperties: deadlineWorker.DeadlineWorkerHostProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.hostName">hostName</a></code> | <code>string</code> | The host name. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.ipAddresses">ipAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a></code> | The IP addresses for a host. |

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

The host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#host_name DeadlineWorker#host_name}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: DeadlineWorkerHostPropertiesIpAddresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

The IP addresses for a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#ip_addresses DeadlineWorker#ip_addresses}

---

### DeadlineWorkerHostPropertiesIpAddresses <a name="DeadlineWorkerHostPropertiesIpAddresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

const deadlineWorkerHostPropertiesIpAddresses: deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV4Addresses">ipV4Addresses</a></code> | <code>string[]</code> | The IpV4 address of the network. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV6Addresses">ipV6Addresses</a></code> | <code>string[]</code> | The IpV6 address for the network and node component. |

---

##### `ipV4Addresses`<sup>Optional</sup> <a name="ipV4Addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV4Addresses"></a>

```typescript
public readonly ipV4Addresses: string[];
```

- *Type:* string[]

The IpV4 address of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#ip_v4_addresses DeadlineWorker#ip_v4_addresses}

---

##### `ipV6Addresses`<sup>Optional</sup> <a name="ipV6Addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV6Addresses"></a>

```typescript
public readonly ipV6Addresses: string[];
```

- *Type:* string[]

The IpV6 address for the network and node component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#ip_v6_addresses DeadlineWorker#ip_v6_addresses}

---

### DeadlineWorkerTags <a name="DeadlineWorkerTags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

const deadlineWorkerTags: deadlineWorker.DeadlineWorkerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#key DeadlineWorker#key}. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#value DeadlineWorker#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#key DeadlineWorker#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#value DeadlineWorker#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineWorkerHostPropertiesIpAddressesOutputReference <a name="DeadlineWorkerHostPropertiesIpAddressesOutputReference" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

new deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV4Addresses">resetIpV4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV6Addresses">resetIpV6Addresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpV4Addresses` <a name="resetIpV4Addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV4Addresses"></a>

```typescript
public resetIpV4Addresses(): void
```

##### `resetIpV6Addresses` <a name="resetIpV6Addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV6Addresses"></a>

```typescript
public resetIpV6Addresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4AddressesInput">ipV4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6AddressesInput">ipV6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4Addresses">ipV4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6Addresses">ipV6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipV4AddressesInput`<sup>Optional</sup> <a name="ipV4AddressesInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4AddressesInput"></a>

```typescript
public readonly ipV4AddressesInput: string[];
```

- *Type:* string[]

---

##### `ipV6AddressesInput`<sup>Optional</sup> <a name="ipV6AddressesInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6AddressesInput"></a>

```typescript
public readonly ipV6AddressesInput: string[];
```

- *Type:* string[]

---

##### `ipV4Addresses`<sup>Required</sup> <a name="ipV4Addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4Addresses"></a>

```typescript
public readonly ipV4Addresses: string[];
```

- *Type:* string[]

---

##### `ipV6Addresses`<sup>Required</sup> <a name="ipV6Addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6Addresses"></a>

```typescript
public readonly ipV6Addresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineWorkerHostPropertiesIpAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

---


### DeadlineWorkerHostPropertiesOutputReference <a name="DeadlineWorkerHostPropertiesOutputReference" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

new deadlineWorker.DeadlineWorkerHostPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.putIpAddresses">putIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddresses` <a name="putIpAddresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.putIpAddresses"></a>

```typescript
public putIpAddresses(value: DeadlineWorkerHostPropertiesIpAddresses): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.putIpAddresses.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

---

##### `resetHostName` <a name="resetHostName" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetIpAddresses"></a>

```typescript
public resetIpAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddresses">ipAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference">DeadlineWorkerHostPropertiesIpAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: DeadlineWorkerHostPropertiesIpAddressesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference">DeadlineWorkerHostPropertiesIpAddressesOutputReference</a>

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: IResolvable | DeadlineWorkerHostPropertiesIpAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineWorkerHostProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

---


### DeadlineWorkerTagsList <a name="DeadlineWorkerTagsList" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

new deadlineWorker.DeadlineWorkerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.get"></a>

```typescript
public get(index: number): DeadlineWorkerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineWorkerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>[]

---


### DeadlineWorkerTagsOutputReference <a name="DeadlineWorkerTagsOutputReference" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer"></a>

```typescript
import { deadlineWorker } from '@cdktn/provider-awscc'

new deadlineWorker.DeadlineWorkerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineWorkerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>

---



