# `connectInstanceStorageConfig` Submodule <a name="`connectInstanceStorageConfig` Submodule" id="@cdktn/provider-awscc.connectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstanceStorageConfig <a name="ConnectInstanceStorageConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

new connectInstanceStorageConfig.ConnectInstanceStorageConfig(scope: Construct, id: string, config: ConnectInstanceStorageConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig">ConnectInstanceStorageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig">ConnectInstanceStorageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig">putKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig">putKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig">putKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config">putS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig">resetKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig">resetKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig">resetKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config">resetS3Config</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKinesisFirehoseConfig` <a name="putKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig"></a>

```typescript
public putKinesisFirehoseConfig(value: ConnectInstanceStorageConfigKinesisFirehoseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---

##### `putKinesisStreamConfig` <a name="putKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig"></a>

```typescript
public putKinesisStreamConfig(value: ConnectInstanceStorageConfigKinesisStreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---

##### `putKinesisVideoStreamConfig` <a name="putKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig"></a>

```typescript
public putKinesisVideoStreamConfig(value: ConnectInstanceStorageConfigKinesisVideoStreamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---

##### `putS3Config` <a name="putS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config"></a>

```typescript
public putS3Config(value: ConnectInstanceStorageConfigS3Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---

##### `resetKinesisFirehoseConfig` <a name="resetKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig"></a>

```typescript
public resetKinesisFirehoseConfig(): void
```

##### `resetKinesisStreamConfig` <a name="resetKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig"></a>

```typescript
public resetKinesisStreamConfig(): void
```

##### `resetKinesisVideoStreamConfig` <a name="resetKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig"></a>

```typescript
public resetKinesisVideoStreamConfig(): void
```

##### `resetS3Config` <a name="resetS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config"></a>

```typescript
public resetS3Config(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectInstanceStorageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectInstanceStorageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstanceStorageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput">kinesisFirehoseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput">kinesisStreamConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput">kinesisVideoStreamConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput">s3ConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kinesisFirehoseConfig`<sup>Required</sup> <a name="kinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

```typescript
public readonly kinesisFirehoseConfig: ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: ConnectInstanceStorageConfigKinesisStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `kinesisVideoStreamConfig`<sup>Required</sup> <a name="kinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

```typescript
public readonly kinesisVideoStreamConfig: ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config"></a>

```typescript
public readonly s3Config: ConnectInstanceStorageConfigS3ConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `kinesisFirehoseConfigInput`<sup>Optional</sup> <a name="kinesisFirehoseConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput"></a>

```typescript
public readonly kinesisFirehoseConfigInput: IResolvable | ConnectInstanceStorageConfigKinesisFirehoseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---

##### `kinesisStreamConfigInput`<sup>Optional</sup> <a name="kinesisStreamConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput"></a>

```typescript
public readonly kinesisStreamConfigInput: IResolvable | ConnectInstanceStorageConfigKinesisStreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---

##### `kinesisVideoStreamConfigInput`<sup>Optional</sup> <a name="kinesisVideoStreamConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput"></a>

```typescript
public readonly kinesisVideoStreamConfigInput: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `s3ConfigInput`<sup>Optional</sup> <a name="s3ConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput"></a>

```typescript
public readonly s3ConfigInput: IResolvable | ConnectInstanceStorageConfigS3Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceStorageConfigConfig <a name="ConnectInstanceStorageConfigConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

const connectInstanceStorageConfigConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Connect Instance ID with which the storage config will be associated. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Specifies the type of storage resource available for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType">storageType</a></code> | <code>string</code> | Specifies the storage type to be associated with the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Connect Instance ID with which the storage config will be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#instance_arn ConnectInstanceStorageConfig#instance_arn}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Specifies the type of storage resource available for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Specifies the storage type to be associated with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}

---

##### `kinesisFirehoseConfig`<sup>Optional</sup> <a name="kinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig"></a>

```typescript
public readonly kinesisFirehoseConfig: ConnectInstanceStorageConfigKinesisFirehoseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}.

---

##### `kinesisStreamConfig`<sup>Optional</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: ConnectInstanceStorageConfigKinesisStreamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}.

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="kinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig"></a>

```typescript
public readonly kinesisVideoStreamConfig: ConnectInstanceStorageConfigKinesisVideoStreamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}.

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config"></a>

```typescript
public readonly s3Config: ConnectInstanceStorageConfigS3Config;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}.

---

### ConnectInstanceStorageConfigKinesisFirehoseConfig <a name="ConnectInstanceStorageConfigKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

const connectInstanceStorageConfigKinesisFirehoseConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | An ARN is a unique AWS resource identifier. |

---

##### `firehoseArn`<sup>Optional</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}

---

### ConnectInstanceStorageConfigKinesisStreamConfig <a name="ConnectInstanceStorageConfigKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

const connectInstanceStorageConfigKinesisStreamConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn">streamArn</a></code> | <code>string</code> | An ARN is a unique AWS resource identifier. |

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

const connectInstanceStorageConfigKinesisVideoStreamConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix">prefix</a></code> | <code>string</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | Number of hours. |

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}

---

##### `retentionPeriodHours`<sup>Optional</sup> <a name="retentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

Number of hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

const connectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>string</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>string</code> | Specifies the encryption key id. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

### ConnectInstanceStorageConfigS3Config <a name="ConnectInstanceStorageConfigS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

const connectInstanceStorageConfigS3Config: connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName">bucketName</a></code> | <code>string</code> | A name for the S3 Bucket. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

A name for the S3 Bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigS3ConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

### ConnectInstanceStorageConfigS3ConfigEncryptionConfig <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

const connectInstanceStorageConfigS3ConfigEncryptionConfig: connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>string</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId">keyId</a></code> | <code>string</code> | Specifies the encryption key id. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn">resetFirehoseArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirehoseArn` <a name="resetFirehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn"></a>

```typescript
public resetFirehoseArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput">firehoseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput"></a>

```typescript
public readonly firehoseArnInput: string;
```

- *Type:* string

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceStorageConfigKinesisFirehoseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---


### ConnectInstanceStorageConfigKinesisStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn"></a>

```typescript
public resetStreamArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceStorageConfigKinesisStreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours">resetRetentionPeriodHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetRetentionPeriodHours` <a name="resetRetentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours"></a>

```typescript
public resetRetentionPeriodHours(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput">retentionPeriodHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `retentionPeriodHoursInput`<sup>Optional</sup> <a name="retentionPeriodHoursInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput"></a>

```typescript
public readonly retentionPeriodHoursInput: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `retentionPeriodHours`<sup>Required</sup> <a name="retentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceStorageConfigKinesisVideoStreamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---


### ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceStorageConfigS3ConfigEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---


### ConnectInstanceStorageConfigS3ConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer"></a>

```typescript
import { connectInstanceStorageConfig } from '@cdktn/provider-awscc'

new connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: ConnectInstanceStorageConfigS3ConfigEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: IResolvable | ConnectInstanceStorageConfigS3ConfigEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceStorageConfigS3Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---



