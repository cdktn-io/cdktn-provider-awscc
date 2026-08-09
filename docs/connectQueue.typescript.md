# `connectQueue` Submodule <a name="`connectQueue` Submodule" id="@cdktn/provider-awscc.connectQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQueue <a name="ConnectQueue" id="@cdktn/provider-awscc.connectQueue.ConnectQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue awscc_connect_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

new connectQueue.ConnectQueue(scope: Construct, id: string, config: ConnectQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig">ConnectQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig">ConnectQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses">putAdditionalEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig">putOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig">putOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses">resetAdditionalEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts">resetMaxContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig">resetOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig">resetOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns">resetQuickConnectArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalEmailAddresses` <a name="putAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses"></a>

```typescript
public putAdditionalEmailAddresses(value: IResolvable | ConnectQueueAdditionalEmailAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

---

##### `putOutboundCallerConfig` <a name="putOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig"></a>

```typescript
public putOutboundCallerConfig(value: ConnectQueueOutboundCallerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `putOutboundEmailConfig` <a name="putOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig"></a>

```typescript
public putOutboundEmailConfig(value: ConnectQueueOutboundEmailConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectQueueTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

---

##### `resetAdditionalEmailAddresses` <a name="resetAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses"></a>

```typescript
public resetAdditionalEmailAddresses(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMaxContacts` <a name="resetMaxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts"></a>

```typescript
public resetMaxContacts(): void
```

##### `resetOutboundCallerConfig` <a name="resetOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig"></a>

```typescript
public resetOutboundCallerConfig(): void
```

##### `resetOutboundEmailConfig` <a name="resetOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig"></a>

```typescript
public resetOutboundEmailConfig(): void
```

##### `resetQuickConnectArns` <a name="resetQuickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns"></a>

```typescript
public resetQuickConnectArns(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

connectQueue.ConnectQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

connectQueue.ConnectQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

connectQueue.ConnectQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

connectQueue.ConnectQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses">additionalEmailAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig">outboundEmailConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput">additionalEmailAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput">hoursOfOperationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput">maxContactsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput">outboundCallerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput">outboundEmailConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput">quickConnectArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts">maxContacts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns">quickConnectArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalEmailAddresses`<sup>Required</sup> <a name="additionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses"></a>

```typescript
public readonly additionalEmailAddresses: ConnectQueueAdditionalEmailAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outboundCallerConfig`<sup>Required</sup> <a name="outboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig"></a>

```typescript
public readonly outboundCallerConfig: ConnectQueueOutboundCallerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a>

---

##### `outboundEmailConfig`<sup>Required</sup> <a name="outboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig"></a>

```typescript
public readonly outboundEmailConfig: ConnectQueueOutboundEmailConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a>

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags"></a>

```typescript
public readonly tags: ConnectQueueTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `additionalEmailAddressesInput`<sup>Optional</sup> <a name="additionalEmailAddressesInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput"></a>

```typescript
public readonly additionalEmailAddressesInput: IResolvable | ConnectQueueAdditionalEmailAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hoursOfOperationArnInput`<sup>Optional</sup> <a name="hoursOfOperationArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput"></a>

```typescript
public readonly hoursOfOperationArnInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `maxContactsInput`<sup>Optional</sup> <a name="maxContactsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput"></a>

```typescript
public readonly maxContactsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outboundCallerConfigInput`<sup>Optional</sup> <a name="outboundCallerConfigInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput"></a>

```typescript
public readonly outboundCallerConfigInput: IResolvable | ConnectQueueOutboundCallerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `outboundEmailConfigInput`<sup>Optional</sup> <a name="outboundEmailConfigInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput"></a>

```typescript
public readonly outboundEmailConfigInput: IResolvable | ConnectQueueOutboundEmailConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---

##### `quickConnectArnsInput`<sup>Optional</sup> <a name="quickConnectArnsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput"></a>

```typescript
public readonly quickConnectArnsInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `maxContacts`<sup>Required</sup> <a name="maxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts"></a>

```typescript
public readonly maxContacts: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quickConnectArns`<sup>Required</sup> <a name="quickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns"></a>

```typescript
public readonly quickConnectArns: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQueueAdditionalEmailAddresses <a name="ConnectQueueAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

const connectQueueAdditionalEmailAddresses: connectQueue.ConnectQueueAdditionalEmailAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn">emailAddressArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the email address. |

---

##### `emailAddressArn`<sup>Optional</sup> <a name="emailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn"></a>

```typescript
public readonly emailAddressArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#email_address_arn ConnectQueue#email_address_arn}

---

### ConnectQueueConfig <a name="ConnectQueueConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

const connectQueueConfig: connectQueue.ConnectQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name">name</a></code> | <code>string</code> | The name of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses">additionalEmailAddresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]</code> | The email addresses that agents can use when replying to or initiating email contacts. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description">description</a></code> | <code>string</code> | The description of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts">maxContacts</a></code> | <code>number</code> | The maximum number of contacts that can be in the queue before it is considered full. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | The outbound caller ID name, number, and outbound whisper flow. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig">outboundEmailConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | The outbound email address ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns">quickConnectArns</a></code> | <code>string[]</code> | The quick connects available to agents who are working the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status">status</a></code> | <code>string</code> | The status of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#hours_of_operation_arn ConnectQueue#hours_of_operation_arn}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#instance_arn ConnectQueue#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#name ConnectQueue#name}

---

##### `additionalEmailAddresses`<sup>Optional</sup> <a name="additionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses"></a>

```typescript
public readonly additionalEmailAddresses: IResolvable | ConnectQueueAdditionalEmailAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

The email addresses that agents can use when replying to or initiating email contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#additional_email_addresses ConnectQueue#additional_email_addresses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#description ConnectQueue#description}

---

##### `maxContacts`<sup>Optional</sup> <a name="maxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts"></a>

```typescript
public readonly maxContacts: number;
```

- *Type:* number

The maximum number of contacts that can be in the queue before it is considered full.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}

---

##### `outboundCallerConfig`<sup>Optional</sup> <a name="outboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig"></a>

```typescript
public readonly outboundCallerConfig: ConnectQueueOutboundCallerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

The outbound caller ID name, number, and outbound whisper flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `outboundEmailConfig`<sup>Optional</sup> <a name="outboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig"></a>

```typescript
public readonly outboundEmailConfig: ConnectQueueOutboundEmailConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

The outbound email address ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#outbound_email_config ConnectQueue#outbound_email_config}

---

##### `quickConnectArns`<sup>Optional</sup> <a name="quickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns"></a>

```typescript
public readonly quickConnectArns: string[];
```

- *Type:* string[]

The quick connects available to agents who are working the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#quick_connect_arns ConnectQueue#quick_connect_arns}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#status ConnectQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#tags ConnectQueue#tags}

---

### ConnectQueueOutboundCallerConfig <a name="ConnectQueueOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

const connectQueueOutboundCallerConfig: connectQueue.ConnectQueueOutboundCallerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName">outboundCallerIdName</a></code> | <code>string</code> | The caller ID name. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn">outboundCallerIdNumberArn</a></code> | <code>string</code> | The caller ID number. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn">outboundFlowArn</a></code> | <code>string</code> | The outbound whisper flow to be used during an outbound call. |

---

##### `outboundCallerIdName`<sup>Optional</sup> <a name="outboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName"></a>

```typescript
public readonly outboundCallerIdName: string;
```

- *Type:* string

The caller ID name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}

---

##### `outboundCallerIdNumberArn`<sup>Optional</sup> <a name="outboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn"></a>

```typescript
public readonly outboundCallerIdNumberArn: string;
```

- *Type:* string

The caller ID number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#outbound_caller_id_number_arn ConnectQueue#outbound_caller_id_number_arn}

---

##### `outboundFlowArn`<sup>Optional</sup> <a name="outboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn"></a>

```typescript
public readonly outboundFlowArn: string;
```

- *Type:* string

The outbound whisper flow to be used during an outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#outbound_flow_arn ConnectQueue#outbound_flow_arn}

---

### ConnectQueueOutboundEmailConfig <a name="ConnectQueueOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

const connectQueueOutboundEmailConfig: connectQueue.ConnectQueueOutboundEmailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId">outboundEmailAddressId</a></code> | <code>string</code> | The email address connect resource ID. |

---

##### `outboundEmailAddressId`<sup>Optional</sup> <a name="outboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId"></a>

```typescript
public readonly outboundEmailAddressId: string;
```

- *Type:* string

The email address connect resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#outbound_email_address_id ConnectQueue#outbound_email_address_id}

---

### ConnectQueueTags <a name="ConnectQueueTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

const connectQueueTags: connectQueue.ConnectQueueTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#key ConnectQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_queue#value ConnectQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQueueAdditionalEmailAddressesList <a name="ConnectQueueAdditionalEmailAddressesList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

new connectQueue.ConnectQueueAdditionalEmailAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get"></a>

```typescript
public get(index: number): ConnectQueueAdditionalEmailAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQueueAdditionalEmailAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>[]

---


### ConnectQueueAdditionalEmailAddressesOutputReference <a name="ConnectQueueAdditionalEmailAddressesOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

new connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn">resetEmailAddressArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddressArn` <a name="resetEmailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn"></a>

```typescript
public resetEmailAddressArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput">emailAddressArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn">emailAddressArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressArnInput`<sup>Optional</sup> <a name="emailAddressArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput"></a>

```typescript
public readonly emailAddressArnInput: string;
```

- *Type:* string

---

##### `emailAddressArn`<sup>Required</sup> <a name="emailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn"></a>

```typescript
public readonly emailAddressArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQueueAdditionalEmailAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>

---


### ConnectQueueOutboundCallerConfigOutputReference <a name="ConnectQueueOutboundCallerConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

new connectQueue.ConnectQueueOutboundCallerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName">resetOutboundCallerIdName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn">resetOutboundCallerIdNumberArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn">resetOutboundFlowArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutboundCallerIdName` <a name="resetOutboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName"></a>

```typescript
public resetOutboundCallerIdName(): void
```

##### `resetOutboundCallerIdNumberArn` <a name="resetOutboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn"></a>

```typescript
public resetOutboundCallerIdNumberArn(): void
```

##### `resetOutboundFlowArn` <a name="resetOutboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn"></a>

```typescript
public resetOutboundFlowArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput">outboundCallerIdNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput">outboundCallerIdNumberArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput">outboundFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName">outboundCallerIdName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn">outboundCallerIdNumberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn">outboundFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outboundCallerIdNameInput`<sup>Optional</sup> <a name="outboundCallerIdNameInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput"></a>

```typescript
public readonly outboundCallerIdNameInput: string;
```

- *Type:* string

---

##### `outboundCallerIdNumberArnInput`<sup>Optional</sup> <a name="outboundCallerIdNumberArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput"></a>

```typescript
public readonly outboundCallerIdNumberArnInput: string;
```

- *Type:* string

---

##### `outboundFlowArnInput`<sup>Optional</sup> <a name="outboundFlowArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput"></a>

```typescript
public readonly outboundFlowArnInput: string;
```

- *Type:* string

---

##### `outboundCallerIdName`<sup>Required</sup> <a name="outboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName"></a>

```typescript
public readonly outboundCallerIdName: string;
```

- *Type:* string

---

##### `outboundCallerIdNumberArn`<sup>Required</sup> <a name="outboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn"></a>

```typescript
public readonly outboundCallerIdNumberArn: string;
```

- *Type:* string

---

##### `outboundFlowArn`<sup>Required</sup> <a name="outboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn"></a>

```typescript
public readonly outboundFlowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQueueOutboundCallerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---


### ConnectQueueOutboundEmailConfigOutputReference <a name="ConnectQueueOutboundEmailConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

new connectQueue.ConnectQueueOutboundEmailConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId">resetOutboundEmailAddressId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutboundEmailAddressId` <a name="resetOutboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId"></a>

```typescript
public resetOutboundEmailAddressId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput">outboundEmailAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId">outboundEmailAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outboundEmailAddressIdInput`<sup>Optional</sup> <a name="outboundEmailAddressIdInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput"></a>

```typescript
public readonly outboundEmailAddressIdInput: string;
```

- *Type:* string

---

##### `outboundEmailAddressId`<sup>Required</sup> <a name="outboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId"></a>

```typescript
public readonly outboundEmailAddressId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQueueOutboundEmailConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---


### ConnectQueueTagsList <a name="ConnectQueueTagsList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

new connectQueue.ConnectQueueTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get"></a>

```typescript
public get(index: number): ConnectQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>[]

---


### ConnectQueueTagsOutputReference <a name="ConnectQueueTagsOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer"></a>

```typescript
import { connectQueue } from '@cdktn/provider-awscc'

new connectQueue.ConnectQueueTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQueueTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>

---



