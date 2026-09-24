# `mediaconvertQueue` Submodule <a name="`mediaconvertQueue` Submodule" id="@cdktn/provider-awscc.mediaconvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertQueue <a name="MediaconvertQueue" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue awscc_mediaconvert_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer"></a>

```typescript
import { mediaconvertQueue } from '@cdktn/provider-awscc'

new mediaconvertQueue.MediaconvertQueue(scope: Construct, id: string, config?: MediaconvertQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig">MediaconvertQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig">MediaconvertQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs">resetConcurrentJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds">resetMaximumConcurrentFeeds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan">resetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConcurrentJobs` <a name="resetConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs"></a>

```typescript
public resetConcurrentJobs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMaximumConcurrentFeeds` <a name="resetMaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds"></a>

```typescript
public resetMaximumConcurrentFeeds(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPricingPlan` <a name="resetPricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan"></a>

```typescript
public resetPricingPlan(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct"></a>

```typescript
import { mediaconvertQueue } from '@cdktn/provider-awscc'

mediaconvertQueue.MediaconvertQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement"></a>

```typescript
import { mediaconvertQueue } from '@cdktn/provider-awscc'

mediaconvertQueue.MediaconvertQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource"></a>

```typescript
import { mediaconvertQueue } from '@cdktn/provider-awscc'

mediaconvertQueue.MediaconvertQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport"></a>

```typescript
import { mediaconvertQueue } from '@cdktn/provider-awscc'

mediaconvertQueue.MediaconvertQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconvertQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconvertQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput">concurrentJobsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput">maximumConcurrentFeedsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput">pricingPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs">concurrentJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds">maximumConcurrentFeeds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags">tags</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `concurrentJobsInput`<sup>Optional</sup> <a name="concurrentJobsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput"></a>

```typescript
public readonly concurrentJobsInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `maximumConcurrentFeedsInput`<sup>Optional</sup> <a name="maximumConcurrentFeedsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput"></a>

```typescript
public readonly maximumConcurrentFeedsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pricingPlanInput`<sup>Optional</sup> <a name="pricingPlanInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput"></a>

```typescript
public readonly pricingPlanInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `concurrentJobs`<sup>Required</sup> <a name="concurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs"></a>

```typescript
public readonly concurrentJobs: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `maximumConcurrentFeeds`<sup>Required</sup> <a name="maximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds"></a>

```typescript
public readonly maximumConcurrentFeeds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertQueueConfig <a name="MediaconvertQueueConfig" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.Initializer"></a>

```typescript
import { mediaconvertQueue } from '@cdktn/provider-awscc'

const mediaconvertQueueConfig: mediaconvertQueue.MediaconvertQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs">concurrentJobs</a></code> | <code>number</code> | Specify the maximum number of jobs your queue can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description">description</a></code> | <code>string</code> | A description of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds">maximumConcurrentFeeds</a></code> | <code>number</code> | Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name">name</a></code> | <code>string</code> | The name of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | When you use CloudFormation, you can create only on-demand queues. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status">status</a></code> | <code>string</code> | Initial state of the queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags">tags</a></code> | <code>string</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `concurrentJobs`<sup>Optional</sup> <a name="concurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs"></a>

```typescript
public readonly concurrentJobs: number;
```

- *Type:* number

Specify the maximum number of jobs your queue can process concurrently.

For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#concurrent_jobs MediaconvertQueue#concurrent_jobs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#description MediaconvertQueue#description}

---

##### `maximumConcurrentFeeds`<sup>Optional</sup> <a name="maximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds"></a>

```typescript
public readonly maximumConcurrentFeeds: number;
```

- *Type:* number

Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds MediaconvertQueue#maximum_concurrent_feeds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#name MediaconvertQueue#name}

---

##### `pricingPlan`<sup>Optional</sup> <a name="pricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

When you use CloudFormation, you can create only on-demand queues.

Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#pricing_plan MediaconvertQueue#pricing_plan}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Initial state of the queue.

Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#status MediaconvertQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#tags MediaconvertQueue#tags}

---



