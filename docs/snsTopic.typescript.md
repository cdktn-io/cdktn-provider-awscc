# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktn/provider-awscc.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic awscc_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

new snsTopic.SnsTopic(scope: Construct, id: string, config?: SnsTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig">SnsTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig">SnsTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging">putDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription">putSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy">resetArchivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy">resetDataProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging">resetDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope">resetFifoThroughputScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic">resetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion">resetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription">resetSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName">resetTopicName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig">resetTracingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryStatusLogging` <a name="putDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging"></a>

```typescript
public putDeliveryStatusLogging(value: IResolvable | SnsTopicDeliveryStatusLogging[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

---

##### `putSubscription` <a name="putSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription"></a>

```typescript
public putSubscription(value: IResolvable | SnsTopicSubscription[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags"></a>

```typescript
public putTags(value: IResolvable | SnsTopicTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

---

##### `resetArchivePolicy` <a name="resetArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy"></a>

```typescript
public resetArchivePolicy(): void
```

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```typescript
public resetContentBasedDeduplication(): void
```

##### `resetDataProtectionPolicy` <a name="resetDataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy"></a>

```typescript
public resetDataProtectionPolicy(): void
```

##### `resetDeliveryStatusLogging` <a name="resetDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging"></a>

```typescript
public resetDeliveryStatusLogging(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFifoThroughputScope` <a name="resetFifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope"></a>

```typescript
public resetFifoThroughputScope(): void
```

##### `resetFifoTopic` <a name="resetFifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic"></a>

```typescript
public resetFifoTopic(): void
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```

##### `resetSignatureVersion` <a name="resetSignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion"></a>

```typescript
public resetSignatureVersion(): void
```

##### `resetSubscription` <a name="resetSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription"></a>

```typescript
public resetSubscription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTopicName` <a name="resetTopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName"></a>

```typescript
public resetTopicName(): void
```

##### `resetTracingConfig` <a name="resetTracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig"></a>

```typescript
public resetTracingConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

snsTopic.SnsTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

snsTopic.SnsTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

snsTopic.SnsTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

snsTopic.SnsTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SnsTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SnsTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SnsTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging">deliveryStatusLogging</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription">subscription</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput">archivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput">dataProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput">deliveryStatusLoggingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput">fifoThroughputScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput">fifoTopicInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput">signatureVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput">subscriptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput">topicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput">tracingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy">archivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy">dataProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope">fifoThroughputScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic">fifoTopic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion">signatureVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig">tracingConfig</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deliveryStatusLogging`<sup>Required</sup> <a name="deliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging"></a>

```typescript
public readonly deliveryStatusLogging: SnsTopicDeliveryStatusLoggingList;
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription"></a>

```typescript
public readonly subscription: SnsTopicSubscriptionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags"></a>

```typescript
public readonly tags: SnsTopicTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a>

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `archivePolicyInput`<sup>Optional</sup> <a name="archivePolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput"></a>

```typescript
public readonly archivePolicyInput: string;
```

- *Type:* string

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```typescript
public readonly contentBasedDeduplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataProtectionPolicyInput`<sup>Optional</sup> <a name="dataProtectionPolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput"></a>

```typescript
public readonly dataProtectionPolicyInput: string;
```

- *Type:* string

---

##### `deliveryStatusLoggingInput`<sup>Optional</sup> <a name="deliveryStatusLoggingInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput"></a>

```typescript
public readonly deliveryStatusLoggingInput: IResolvable | SnsTopicDeliveryStatusLogging[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fifoThroughputScopeInput`<sup>Optional</sup> <a name="fifoThroughputScopeInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput"></a>

```typescript
public readonly fifoThroughputScopeInput: string;
```

- *Type:* string

---

##### `fifoTopicInput`<sup>Optional</sup> <a name="fifoTopicInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```typescript
public readonly fifoTopicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `signatureVersionInput`<sup>Optional</sup> <a name="signatureVersionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```typescript
public readonly signatureVersionInput: string;
```

- *Type:* string

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput"></a>

```typescript
public readonly subscriptionInput: IResolvable | SnsTopicSubscription[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SnsTopicTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput"></a>

```typescript
public readonly topicNameInput: string;
```

- *Type:* string

---

##### `tracingConfigInput`<sup>Optional</sup> <a name="tracingConfigInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```typescript
public readonly tracingConfigInput: string;
```

- *Type:* string

---

##### `archivePolicy`<sup>Required</sup> <a name="archivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy"></a>

```typescript
public readonly archivePolicy: string;
```

- *Type:* string

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataProtectionPolicy`<sup>Required</sup> <a name="dataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy"></a>

```typescript
public readonly dataProtectionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fifoThroughputScope`<sup>Required</sup> <a name="fifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope"></a>

```typescript
public readonly fifoThroughputScope: string;
```

- *Type:* string

---

##### `fifoTopic`<sup>Required</sup> <a name="fifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic"></a>

```typescript
public readonly fifoTopic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `signatureVersion`<sup>Required</sup> <a name="signatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion"></a>

```typescript
public readonly signatureVersion: string;
```

- *Type:* string

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

const snsTopicConfig: snsTopic.SnsTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy">archivePolicy</a></code> | <code>string</code> | The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktn.IResolvable</code> | ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy">dataProtectionPolicy</a></code> | <code>string</code> | The body of the policy document you want to use for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging">deliveryStatusLogging</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]</code> | The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name to use for an SNS topic with SMS subscriptions. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope">fifoThroughputScope</a></code> | <code>string</code> | Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic">fifoTopic</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to true to create a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion">signatureVersion</a></code> | <code>string</code> | The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription">subscription</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]</code> | The SNS subscriptions (endpoints) for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]</code> | The list of tags to add to a new topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName">topicName</a></code> | <code>string</code> | The name of the topic you want to create. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig">tracingConfig</a></code> | <code>string</code> | Tracing mode of an SNS topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `archivePolicy`<sup>Optional</sup> <a name="archivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy"></a>

```typescript
public readonly archivePolicy: string;
```

- *Type:* string

The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics.

You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics.

By default, this property is set to false. If you create a FIFO topic with ``ContentBasedDeduplication`` set to false, you must provide a ``MessageDeduplicationId`` for each ``Publish`` action. When set to true, SNS automatically generates a ``MessageDeduplicationId`` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a ``MessageDeduplicationId`` in the ``Publish`` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}

---

##### `dataProtectionPolicy`<sup>Optional</sup> <a name="dataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy"></a>

```typescript
public readonly dataProtectionPolicy: string;
```

- *Type:* string

The body of the policy document you want to use for this topic.

You can only add one policy per topic.
 The policy must be in JSON string format.
 Length Constraints: Maximum length of 30,720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#data_protection_policy SnsTopic#data_protection_policy}

---

##### `deliveryStatusLogging`<sup>Optional</sup> <a name="deliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging"></a>

```typescript
public readonly deliveryStatusLogging: IResolvable | SnsTopicDeliveryStatusLogging[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#delivery_status_logging SnsTopic#delivery_status_logging}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name to use for an SNS topic with SMS subscriptions.

The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#display_name SnsTopic#display_name}

---

##### `fifoThroughputScope`<sup>Optional</sup> <a name="fifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope"></a>

```typescript
public readonly fifoThroughputScope: string;
```

- *Type:* string

Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}

---

##### `fifoTopic`<sup>Optional</sup> <a name="fifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```typescript
public readonly fifoTopic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to true to create a FIFO topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK.

For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see ``KeyId`` in the *API Reference*.
 This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}

---

##### `signatureVersion`<sup>Optional</sup> <a name="signatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```typescript
public readonly signatureVersion: string;
```

- *Type:* string

The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.

By default, ``SignatureVersion`` is set to ``1``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription"></a>

```typescript
public readonly subscription: IResolvable | SnsTopicSubscription[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

The SNS subscriptions (endpoints) for this topic.

If you specify the ``Subscription`` property in the ``AWS::SNS::Topic`` resource and it creates an associated subscription resource, the associated subscription is not deleted when the ``AWS::SNS::Topic`` resource is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#subscription SnsTopic#subscription}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SnsTopicTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

The list of tags to add to a new topic.

To be able to tag a topic on creation, you must have the ``sns:CreateTopic`` and ``sns:TagResource`` permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#tags SnsTopic#tags}

---

##### `topicName`<sup>Optional</sup> <a name="topicName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The name of the topic you want to create.

Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with ``.fifo``.
 If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#topic_name SnsTopic#topic_name}

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: string;
```

- *Type:* string

Tracing mode of an SNS topic.

By default ``TracingConfig`` is set to ``PassThrough``, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to ``Active``, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}

---

### SnsTopicDeliveryStatusLogging <a name="SnsTopicDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

const snsTopicDeliveryStatusLogging: snsTopic.SnsTopicDeliveryStatusLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>string</code> | The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol">protocol</a></code> | <code>string</code> | Indicates one of the supported protocols for the Amazon SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>string</code> | The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>string</code> | The percentage of successful message deliveries to be logged in Amazon CloudWatch. |

---

##### `failureFeedbackRoleArn`<sup>Optional</sup> <a name="failureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn"></a>

```typescript
public readonly failureFeedbackRoleArn: string;
```

- *Type:* string

The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#failure_feedback_role_arn SnsTopic#failure_feedback_role_arn}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Indicates one of the supported protocols for the Amazon SNS topic.

At least one of the other three ``LoggingConfig`` properties is recommend along with ``Protocol``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

##### `successFeedbackRoleArn`<sup>Optional</sup> <a name="successFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn"></a>

```typescript
public readonly successFeedbackRoleArn: string;
```

- *Type:* string

The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#success_feedback_role_arn SnsTopic#success_feedback_role_arn}

---

##### `successFeedbackSampleRate`<sup>Optional</sup> <a name="successFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate"></a>

```typescript
public readonly successFeedbackSampleRate: string;
```

- *Type:* string

The percentage of successful message deliveries to be logged in Amazon CloudWatch.

Valid percentage values range from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#success_feedback_sample_rate SnsTopic#success_feedback_sample_rate}

---

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

const snsTopicSubscription: snsTopic.SnsTopicSubscription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint that receives notifications from the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol">protocol</a></code> | <code>string</code> | The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint that receives notifications from the SNS topic.

The endpoint value depends on the protocol that you specify. For more information, see the ``Endpoint`` parameter of the ``Subscribe`` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#endpoint SnsTopic#endpoint}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

### SnsTopicTags <a name="SnsTopicTags" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

const snsTopicTags: snsTopic.SnsTopicTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key">key</a></code> | <code>string</code> | The required key portion of the tag. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value">value</a></code> | <code>string</code> | The optional value portion of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The required key portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#key SnsTopic#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The optional value portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#value SnsTopic#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SnsTopicDeliveryStatusLoggingList <a name="SnsTopicDeliveryStatusLoggingList" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

new snsTopic.SnsTopicDeliveryStatusLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get"></a>

```typescript
public get(index: number): SnsTopicDeliveryStatusLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SnsTopicDeliveryStatusLogging[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>[]

---


### SnsTopicDeliveryStatusLoggingOutputReference <a name="SnsTopicDeliveryStatusLoggingOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

new snsTopic.SnsTopicDeliveryStatusLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn">resetFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn">resetSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate">resetSuccessFeedbackSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureFeedbackRoleArn` <a name="resetFailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn"></a>

```typescript
public resetFailureFeedbackRoleArn(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSuccessFeedbackRoleArn` <a name="resetSuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn"></a>

```typescript
public resetSuccessFeedbackRoleArn(): void
```

##### `resetSuccessFeedbackSampleRate` <a name="resetSuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate"></a>

```typescript
public resetSuccessFeedbackSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput">failureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput">successFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput">successFeedbackSampleRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn">failureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn">successFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate">successFeedbackSampleRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureFeedbackRoleArnInput`<sup>Optional</sup> <a name="failureFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput"></a>

```typescript
public readonly failureFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `successFeedbackRoleArnInput`<sup>Optional</sup> <a name="successFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput"></a>

```typescript
public readonly successFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `successFeedbackSampleRateInput`<sup>Optional</sup> <a name="successFeedbackSampleRateInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput"></a>

```typescript
public readonly successFeedbackSampleRateInput: string;
```

- *Type:* string

---

##### `failureFeedbackRoleArn`<sup>Required</sup> <a name="failureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn"></a>

```typescript
public readonly failureFeedbackRoleArn: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `successFeedbackRoleArn`<sup>Required</sup> <a name="successFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn"></a>

```typescript
public readonly successFeedbackRoleArn: string;
```

- *Type:* string

---

##### `successFeedbackSampleRate`<sup>Required</sup> <a name="successFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate"></a>

```typescript
public readonly successFeedbackSampleRate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SnsTopicDeliveryStatusLogging;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging">SnsTopicDeliveryStatusLogging</a>

---


### SnsTopicSubscriptionList <a name="SnsTopicSubscriptionList" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

new snsTopic.SnsTopicSubscriptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get"></a>

```typescript
public get(index: number): SnsTopicSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SnsTopicSubscription[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>[]

---


### SnsTopicSubscriptionOutputReference <a name="SnsTopicSubscriptionOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

new snsTopic.SnsTopicSubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SnsTopicSubscription;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription">SnsTopicSubscription</a>

---


### SnsTopicTagsList <a name="SnsTopicTagsList" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

new snsTopic.SnsTopicTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get"></a>

```typescript
public get(index: number): SnsTopicTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SnsTopicTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>[]

---


### SnsTopicTagsOutputReference <a name="SnsTopicTagsOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer"></a>

```typescript
import { snsTopic } from '@cdktn/provider-awscc'

new snsTopic.SnsTopicTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SnsTopicTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags">SnsTopicTags</a>

---



