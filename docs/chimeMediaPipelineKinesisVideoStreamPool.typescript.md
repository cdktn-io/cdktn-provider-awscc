# `chimeMediaPipelineKinesisVideoStreamPool` Submodule <a name="`chimeMediaPipelineKinesisVideoStreamPool` Submodule" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaPipelineKinesisVideoStreamPool <a name="ChimeMediaPipelineKinesisVideoStreamPool" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool(scope: Construct, id: string, config: ChimeMediaPipelineKinesisVideoStreamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig">ChimeMediaPipelineKinesisVideoStreamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig">ChimeMediaPipelineKinesisVideoStreamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration">putStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamConfiguration` <a name="putStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration"></a>

```typescript
public putStreamConfiguration(value: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeMediaPipelineKinesisVideoStreamPoolTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeMediaPipelineKinesisVideoStreamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeMediaPipelineKinesisVideoStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaPipelineKinesisVideoStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus">poolStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput">poolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput">streamConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName">poolName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `poolStatus`<sup>Required</sup> <a name="poolStatus" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus"></a>

```typescript
public readonly poolStatus: string;
```

- *Type:* string

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration"></a>

```typescript
public readonly streamConfiguration: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags"></a>

```typescript
public readonly tags: ChimeMediaPipelineKinesisVideoStreamPoolTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput"></a>

```typescript
public readonly poolNameInput: string;
```

- *Type:* string

---

##### `streamConfigurationInput`<sup>Optional</sup> <a name="streamConfigurationInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput"></a>

```typescript
public readonly streamConfigurationInput: IResolvable | ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeMediaPipelineKinesisVideoStreamPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolConfig <a name="ChimeMediaPipelineKinesisVideoStreamPoolConfig" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.Initializer"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

const chimeMediaPipelineKinesisVideoStreamPoolConfig: chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName">poolName</a></code> | <code>string</code> | The name of the Kinesis Video Stream Pool. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | The configuration settings for the Kinesis video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]</code> | The tags associated with the Kinesis Video Stream Pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

The name of the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#pool_name ChimeMediaPipelineKinesisVideoStreamPool#pool_name}

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration"></a>

```typescript
public readonly streamConfiguration: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

The configuration settings for the Kinesis video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#stream_configuration ChimeMediaPipelineKinesisVideoStreamPool#stream_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeMediaPipelineKinesisVideoStreamPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

The tags associated with the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#tags ChimeMediaPipelineKinesisVideoStreamPool#tags}

---

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.Initializer"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

const chimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration: chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region">region</a></code> | <code>string</code> | The AWS Region of the video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours">dataRetentionInHours</a></code> | <code>number</code> | The amount of time that data is retained, in hours. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS Region of the video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#region ChimeMediaPipelineKinesisVideoStreamPool#region}

---

##### `dataRetentionInHours`<sup>Optional</sup> <a name="dataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours"></a>

```typescript
public readonly dataRetentionInHours: number;
```

- *Type:* number

The amount of time that data is retained, in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#data_retention_in_hours ChimeMediaPipelineKinesisVideoStreamPool#data_retention_in_hours}

---

### ChimeMediaPipelineKinesisVideoStreamPoolTags <a name="ChimeMediaPipelineKinesisVideoStreamPoolTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.Initializer"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

const chimeMediaPipelineKinesisVideoStreamPoolTags: chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours">resetDataRetentionInHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataRetentionInHours` <a name="resetDataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours"></a>

```typescript
public resetDataRetentionInHours(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput">dataRetentionInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours">dataRetentionInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataRetentionInHoursInput`<sup>Optional</sup> <a name="dataRetentionInHoursInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput"></a>

```typescript
public readonly dataRetentionInHoursInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `dataRetentionInHours`<sup>Required</sup> <a name="dataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours"></a>

```typescript
public readonly dataRetentionInHours: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsList <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsList" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get"></a>

```typescript
public get(index: number): ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaPipelineKinesisVideoStreamPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer"></a>

```typescript
import { chimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeMediaPipelineKinesisVideoStreamPoolTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>

---



