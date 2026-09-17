# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktn/provider-awscc.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

new configDeliveryChannel.ConfigDeliveryChannel(scope: Construct, id: string, config: ConfigDeliveryChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties">putConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties">resetConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">resetS3KmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigSnapshotDeliveryProperties` <a name="putConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties"></a>

```typescript
public putConfigSnapshotDeliveryProperties(value: ConfigDeliveryChannelConfigSnapshotDeliveryProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `resetConfigSnapshotDeliveryProperties` <a name="resetConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties"></a>

```typescript
public resetConfigSnapshotDeliveryProperties(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```typescript
public resetName(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```

##### `resetS3KmsKeyArn` <a name="resetS3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```typescript
public resetS3KmsKeyArn(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

configDeliveryChannel.ConfigDeliveryChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigDeliveryChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties">configSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput">configSnapshotDeliveryPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">s3KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configSnapshotDeliveryProperties`<sup>Required</sup> <a name="configSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```typescript
public readonly configSnapshotDeliveryProperties: ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `configSnapshotDeliveryPropertiesInput`<sup>Optional</sup> <a name="configSnapshotDeliveryPropertiesInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput"></a>

```typescript
public readonly configSnapshotDeliveryPropertiesInput: IResolvable | ConfigDeliveryChannelConfigSnapshotDeliveryProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `s3KmsKeyArnInput`<sup>Optional</sup> <a name="s3KmsKeyArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```typescript
public readonly s3KmsKeyArnInput: string;
```

- *Type:* string

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `s3KmsKeyArn`<sup>Required</sup> <a name="s3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```typescript
public readonly s3KmsKeyArn: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

const configDeliveryChannelConfig: configDeliveryChannel.ConfigDeliveryChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties">configSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">name</a></code> | <code>string</code> | The name of the delivery channel. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | The prefix for the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">s3KmsKeyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}

---

##### `configSnapshotDeliveryProperties`<sup>Optional</sup> <a name="configSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties"></a>

```typescript
public readonly configSnapshotDeliveryProperties: ConfigDeliveryChannelConfigSnapshotDeliveryProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties ConfigDeliveryChannel#config_snapshot_delivery_properties}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the delivery channel.

By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

The prefix for the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}

---

##### `s3KmsKeyArn`<sup>Optional</sup> <a name="s3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```typescript
public readonly s3KmsKeyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config.

Must belong to the same Region as the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}

---

### ConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="ConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

const configDeliveryChannelConfigSnapshotDeliveryProperties: configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency">deliveryFrequency</a></code> | <code>string</code> | The frequency with which AWS Config delivers configuration snapshots. |

---

##### `deliveryFrequency`<sup>Optional</sup> <a name="deliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```typescript
public readonly deliveryFrequency: string;
```

- *Type:* string

The frequency with which AWS Config delivers configuration snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```typescript
import { configDeliveryChannel } from '@cdktn/provider-awscc'

new configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">resetDeliveryFrequency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryFrequency` <a name="resetDeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```typescript
public resetDeliveryFrequency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">deliveryFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">deliveryFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryFrequencyInput`<sup>Optional</sup> <a name="deliveryFrequencyInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```typescript
public readonly deliveryFrequencyInput: string;
```

- *Type:* string

---

##### `deliveryFrequency`<sup>Required</sup> <a name="deliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```typescript
public readonly deliveryFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigDeliveryChannelConfigSnapshotDeliveryProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---



