# `iotanalyticsChannel` Submodule <a name="`iotanalyticsChannel` Submodule" id="@cdktn/provider-awscc.iotanalyticsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsChannel <a name="IotanalyticsChannel" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel awscc_iotanalytics_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

new iotanalyticsChannel.IotanalyticsChannel(scope: Construct, id: string, config?: IotanalyticsChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig">IotanalyticsChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig">IotanalyticsChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putChannelStorage">putChannelStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putRetentionPeriod">putRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelStorage">resetChannelStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChannelStorage` <a name="putChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putChannelStorage"></a>

```typescript
public putChannelStorage(value: IotanalyticsChannelChannelStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putChannelStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

---

##### `putRetentionPeriod` <a name="putRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putRetentionPeriod"></a>

```typescript
public putRetentionPeriod(value: IotanalyticsChannelRetentionPeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putTags"></a>

```typescript
public putTags(value: IResolvable | IotanalyticsChannelTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

---

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelName"></a>

```typescript
public resetChannelName(): void
```

##### `resetChannelStorage` <a name="resetChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelStorage"></a>

```typescript
public resetChannelStorage(): void
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotanalyticsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isConstruct"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

iotanalyticsChannel.IotanalyticsChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformElement"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

iotanalyticsChannel.IotanalyticsChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformResource"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

iotanalyticsChannel.IotanalyticsChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotanalyticsChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotanalyticsChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotanalyticsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorage">channelStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference">IotanalyticsChannelChannelStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference">IotanalyticsChannelRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList">IotanalyticsChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorageInput">channelStorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelStorage`<sup>Required</sup> <a name="channelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorage"></a>

```typescript
public readonly channelStorage: IotanalyticsChannelChannelStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference">IotanalyticsChannelChannelStorageOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: IotanalyticsChannelRetentionPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference">IotanalyticsChannelRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tags"></a>

```typescript
public readonly tags: IotanalyticsChannelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList">IotanalyticsChannelTagsList</a>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `channelStorageInput`<sup>Optional</sup> <a name="channelStorageInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorageInput"></a>

```typescript
public readonly channelStorageInput: IResolvable | IotanalyticsChannelChannelStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: IResolvable | IotanalyticsChannelRetentionPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotanalyticsChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsChannelChannelStorage <a name="IotanalyticsChannelChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

const iotanalyticsChannelChannelStorage: iotanalyticsChannel.IotanalyticsChannelChannelStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.customerManagedS3">customerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#customer_managed_s3 IotanalyticsChannel#customer_managed_s3}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.serviceManagedS3">serviceManagedS3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#service_managed_s3 IotanalyticsChannel#service_managed_s3}. |

---

##### `customerManagedS3`<sup>Optional</sup> <a name="customerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.customerManagedS3"></a>

```typescript
public readonly customerManagedS3: IotanalyticsChannelChannelStorageCustomerManagedS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#customer_managed_s3 IotanalyticsChannel#customer_managed_s3}.

---

##### `serviceManagedS3`<sup>Optional</sup> <a name="serviceManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.serviceManagedS3"></a>

```typescript
public readonly serviceManagedS3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#service_managed_s3 IotanalyticsChannel#service_managed_s3}.

---

### IotanalyticsChannelChannelStorageCustomerManagedS3 <a name="IotanalyticsChannelChannelStorageCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

const iotanalyticsChannelChannelStorageCustomerManagedS3: iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#bucket IotanalyticsChannel#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key_prefix IotanalyticsChannel#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#role_arn IotanalyticsChannel#role_arn}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#bucket IotanalyticsChannel#bucket}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key_prefix IotanalyticsChannel#key_prefix}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#role_arn IotanalyticsChannel#role_arn}.

---

### IotanalyticsChannelConfig <a name="IotanalyticsChannelConfig" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

const iotanalyticsChannelConfig: iotanalyticsChannel.IotanalyticsChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelName">channelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_name IotanalyticsChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelStorage">channelStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_storage IotanalyticsChannel#channel_storage}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#retention_period IotanalyticsChannel#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#tags IotanalyticsChannel#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_name IotanalyticsChannel#channel_name}.

---

##### `channelStorage`<sup>Optional</sup> <a name="channelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelStorage"></a>

```typescript
public readonly channelStorage: IotanalyticsChannelChannelStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_storage IotanalyticsChannel#channel_storage}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: IotanalyticsChannelRetentionPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#retention_period IotanalyticsChannel#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotanalyticsChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#tags IotanalyticsChannel#tags}.

---

### IotanalyticsChannelRetentionPeriod <a name="IotanalyticsChannelRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

const iotanalyticsChannelRetentionPeriod: iotanalyticsChannel.IotanalyticsChannelRetentionPeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.numberOfDays">numberOfDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#number_of_days IotanalyticsChannel#number_of_days}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.unlimited">unlimited</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#unlimited IotanalyticsChannel#unlimited}. |

---

##### `numberOfDays`<sup>Optional</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.numberOfDays"></a>

```typescript
public readonly numberOfDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#number_of_days IotanalyticsChannel#number_of_days}.

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.unlimited"></a>

```typescript
public readonly unlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#unlimited IotanalyticsChannel#unlimited}.

---

### IotanalyticsChannelTags <a name="IotanalyticsChannelTags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

const iotanalyticsChannelTags: iotanalyticsChannel.IotanalyticsChannelTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key IotanalyticsChannel#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#value IotanalyticsChannel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key IotanalyticsChannel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#value IotanalyticsChannel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference <a name="IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

new iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsChannelChannelStorageCustomerManagedS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

---


### IotanalyticsChannelChannelStorageOutputReference <a name="IotanalyticsChannelChannelStorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

new iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.putCustomerManagedS3">putCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetCustomerManagedS3">resetCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetServiceManagedS3">resetServiceManagedS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedS3` <a name="putCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.putCustomerManagedS3"></a>

```typescript
public putCustomerManagedS3(value: IotanalyticsChannelChannelStorageCustomerManagedS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.putCustomerManagedS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

---

##### `resetCustomerManagedS3` <a name="resetCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetCustomerManagedS3"></a>

```typescript
public resetCustomerManagedS3(): void
```

##### `resetServiceManagedS3` <a name="resetServiceManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetServiceManagedS3"></a>

```typescript
public resetServiceManagedS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3">customerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference">IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3Input">customerManagedS3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3Input">serviceManagedS3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3">serviceManagedS3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedS3`<sup>Required</sup> <a name="customerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3"></a>

```typescript
public readonly customerManagedS3: IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference">IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference</a>

---

##### `customerManagedS3Input`<sup>Optional</sup> <a name="customerManagedS3Input" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3Input"></a>

```typescript
public readonly customerManagedS3Input: IResolvable | IotanalyticsChannelChannelStorageCustomerManagedS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

---

##### `serviceManagedS3Input`<sup>Optional</sup> <a name="serviceManagedS3Input" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3Input"></a>

```typescript
public readonly serviceManagedS3Input: string;
```

- *Type:* string

---

##### `serviceManagedS3`<sup>Required</sup> <a name="serviceManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3"></a>

```typescript
public readonly serviceManagedS3: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsChannelChannelStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

---


### IotanalyticsChannelRetentionPeriodOutputReference <a name="IotanalyticsChannelRetentionPeriodOutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

new iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetNumberOfDays">resetNumberOfDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetUnlimited">resetUnlimited</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfDays` <a name="resetNumberOfDays" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetNumberOfDays"></a>

```typescript
public resetNumberOfDays(): void
```

##### `resetUnlimited` <a name="resetUnlimited" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetUnlimited"></a>

```typescript
public resetUnlimited(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDaysInput">numberOfDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimitedInput">unlimitedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDays">numberOfDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfDaysInput`<sup>Optional</sup> <a name="numberOfDaysInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDaysInput"></a>

```typescript
public readonly numberOfDaysInput: number;
```

- *Type:* number

---

##### `unlimitedInput`<sup>Optional</sup> <a name="unlimitedInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimitedInput"></a>

```typescript
public readonly unlimitedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberOfDays`<sup>Required</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDays"></a>

```typescript
public readonly numberOfDays: number;
```

- *Type:* number

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimited"></a>

```typescript
public readonly unlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsChannelRetentionPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

---


### IotanalyticsChannelTagsList <a name="IotanalyticsChannelTagsList" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

new iotanalyticsChannel.IotanalyticsChannelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.get"></a>

```typescript
public get(index: number): IotanalyticsChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsChannelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

---


### IotanalyticsChannelTagsOutputReference <a name="IotanalyticsChannelTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer"></a>

```typescript
import { iotanalyticsChannel } from '@cdktn/provider-awscc'

new iotanalyticsChannel.IotanalyticsChannelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsChannelTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>

---



