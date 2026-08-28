# `kafkaconnectCustomPlugin` Submodule <a name="`kafkaconnectCustomPlugin` Submodule" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectCustomPlugin <a name="KafkaconnectCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new kafkaconnectCustomPlugin.KafkaconnectCustomPlugin(scope: Construct, id: string, config: KafkaconnectCustomPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig">KafkaconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig">KafkaconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation"></a>

```typescript
public putLocation(value: KafkaconnectCustomPluginLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags"></a>

```typescript
public putTags(value: IResolvable | KafkaconnectCustomPluginTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KafkaconnectCustomPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KafkaconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn">customPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription">fileDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customPluginArn`<sup>Required</sup> <a name="customPluginArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.customPluginArn"></a>

```typescript
public readonly customPluginArn: string;
```

- *Type:* string

---

##### `fileDescription`<sup>Required</sup> <a name="fileDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.fileDescription"></a>

```typescript
public readonly fileDescription: KafkaconnectCustomPluginFileDescriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference">KafkaconnectCustomPluginFileDescriptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.location"></a>

```typescript
public readonly location: KafkaconnectCustomPluginLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference">KafkaconnectCustomPluginLocationOutputReference</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tags"></a>

```typescript
public readonly tags: KafkaconnectCustomPluginTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList">KafkaconnectCustomPluginTagsList</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | KafkaconnectCustomPluginLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | KafkaconnectCustomPluginTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectCustomPluginConfig <a name="KafkaconnectCustomPluginConfig" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const kafkaconnectCustomPluginConfig: kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType">contentType</a></code> | <code>string</code> | The type of the plugin file. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | Information about the location of a custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name">name</a></code> | <code>string</code> | The name of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description">description</a></code> | <code>string</code> | A summary description of the custom plugin. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The type of the plugin file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#content_type KafkaconnectCustomPlugin#content_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.location"></a>

```typescript
public readonly location: KafkaconnectCustomPluginLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

Information about the location of a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#location KafkaconnectCustomPlugin#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#name KafkaconnectCustomPlugin#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A summary description of the custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#description KafkaconnectCustomPlugin#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | KafkaconnectCustomPluginTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#tags KafkaconnectCustomPlugin#tags}

---

### KafkaconnectCustomPluginFileDescription <a name="KafkaconnectCustomPluginFileDescription" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const kafkaconnectCustomPluginFileDescription: kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription = { ... }
```


### KafkaconnectCustomPluginLocation <a name="KafkaconnectCustomPluginLocation" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const kafkaconnectCustomPluginLocation: kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3. |

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation.property.s3Location"></a>

```typescript
public readonly s3Location: KafkaconnectCustomPluginLocationS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#s3_location KafkaconnectCustomPlugin#s3_location}

---

### KafkaconnectCustomPluginLocationS3Location <a name="KafkaconnectCustomPluginLocationS3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const kafkaconnectCustomPluginLocationS3Location: kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn">bucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey">fileKey</a></code> | <code>string</code> | The file key for an object in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion">objectVersion</a></code> | <code>string</code> | The version of an object in an S3 bucket. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#bucket_arn KafkaconnectCustomPlugin#bucket_arn}

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.fileKey"></a>

```typescript
public readonly fileKey: string;
```

- *Type:* string

The file key for an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#file_key KafkaconnectCustomPlugin#file_key}

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

The version of an object in an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#object_version KafkaconnectCustomPlugin#object_version}

---

### KafkaconnectCustomPluginTags <a name="KafkaconnectCustomPluginTags" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

const kafkaconnectCustomPluginTags: kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#key KafkaconnectCustomPlugin#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_custom_plugin#value KafkaconnectCustomPlugin#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectCustomPluginFileDescriptionOutputReference <a name="KafkaconnectCustomPluginFileDescriptionOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5">fileMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize">fileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileMd5`<sup>Required</sup> <a name="fileMd5" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5"></a>

```typescript
public readonly fileMd5: string;
```

- *Type:* string

---

##### `fileSize`<sup>Required</sup> <a name="fileSize" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize"></a>

```typescript
public readonly fileSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KafkaconnectCustomPluginFileDescription;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginFileDescription">KafkaconnectCustomPluginFileDescription</a>

---


### KafkaconnectCustomPluginLocationOutputReference <a name="KafkaconnectCustomPluginLocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location">putS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: KafkaconnectCustomPluginLocationS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: KafkaconnectCustomPluginLocationS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference">KafkaconnectCustomPluginLocationS3LocationOutputReference</a>

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | KafkaconnectCustomPluginLocationS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectCustomPluginLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocation">KafkaconnectCustomPluginLocation</a>

---


### KafkaconnectCustomPluginLocationS3LocationOutputReference <a name="KafkaconnectCustomPluginLocationS3LocationOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion">resetObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObjectVersion` <a name="resetObjectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.resetObjectVersion"></a>

```typescript
public resetObjectVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput">fileKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput">objectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey">fileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion">objectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `fileKeyInput`<sup>Optional</sup> <a name="fileKeyInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKeyInput"></a>

```typescript
public readonly fileKeyInput: string;
```

- *Type:* string

---

##### `objectVersionInput`<sup>Optional</sup> <a name="objectVersionInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersionInput"></a>

```typescript
public readonly objectVersionInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey"></a>

```typescript
public readonly fileKey: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectCustomPluginLocationS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginLocationS3Location">KafkaconnectCustomPluginLocationS3Location</a>

---


### KafkaconnectCustomPluginTagsList <a name="KafkaconnectCustomPluginTagsList" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get"></a>

```typescript
public get(index: number): KafkaconnectCustomPluginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectCustomPluginTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>[]

---


### KafkaconnectCustomPluginTagsOutputReference <a name="KafkaconnectCustomPluginTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer"></a>

```typescript
import { kafkaconnectCustomPlugin } from '@cdktn/provider-awscc'

new kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectCustomPluginTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectCustomPlugin.KafkaconnectCustomPluginTags">KafkaconnectCustomPluginTags</a>

---



