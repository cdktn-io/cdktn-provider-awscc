# `kafkaconnectWorkerConfiguration` Submodule <a name="`kafkaconnectWorkerConfiguration` Submodule" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectWorkerConfiguration <a name="KafkaconnectWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration awscc_kafkaconnect_worker_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.Initializer"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

new kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration(scope: Construct, id: string, config: KafkaconnectWorkerConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig">KafkaconnectWorkerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig">KafkaconnectWorkerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | KafkaconnectWorkerConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectWorkerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isConstruct"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformElement"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformResource"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.generateConfigForImport"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KafkaconnectWorkerConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KafkaconnectWorkerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KafkaconnectWorkerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectWorkerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList">KafkaconnectWorkerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.workerConfigurationArn">workerConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.propertiesFileContentInput">propertiesFileContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.propertiesFileContent">propertiesFileContent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.tags"></a>

```typescript
public readonly tags: KafkaconnectWorkerConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList">KafkaconnectWorkerConfigurationTagsList</a>

---

##### `workerConfigurationArn`<sup>Required</sup> <a name="workerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.workerConfigurationArn"></a>

```typescript
public readonly workerConfigurationArn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesFileContentInput`<sup>Optional</sup> <a name="propertiesFileContentInput" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.propertiesFileContentInput"></a>

```typescript
public readonly propertiesFileContentInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | KafkaconnectWorkerConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `propertiesFileContent`<sup>Required</sup> <a name="propertiesFileContent" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.propertiesFileContent"></a>

```typescript
public readonly propertiesFileContent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectWorkerConfigurationConfig <a name="KafkaconnectWorkerConfigurationConfig" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.Initializer"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

const kafkaconnectWorkerConfigurationConfig: kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.name">name</a></code> | <code>string</code> | The name of the worker configuration. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.propertiesFileContent">propertiesFileContent</a></code> | <code>string</code> | Base64 encoded contents of connect-distributed.properties file. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.description">description</a></code> | <code>string</code> | A summary description of the worker configuration. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the worker configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#name KafkaconnectWorkerConfiguration#name}

---

##### `propertiesFileContent`<sup>Required</sup> <a name="propertiesFileContent" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.propertiesFileContent"></a>

```typescript
public readonly propertiesFileContent: string;
```

- *Type:* string

Base64 encoded contents of connect-distributed.properties file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#properties_file_content KafkaconnectWorkerConfiguration#properties_file_content}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A summary description of the worker configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#description KafkaconnectWorkerConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | KafkaconnectWorkerConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#tags KafkaconnectWorkerConfiguration#tags}

---

### KafkaconnectWorkerConfigurationTags <a name="KafkaconnectWorkerConfigurationTags" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags.Initializer"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

const kafkaconnectWorkerConfigurationTags: kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#key KafkaconnectWorkerConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#value KafkaconnectWorkerConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#key KafkaconnectWorkerConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_worker_configuration#value KafkaconnectWorkerConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectWorkerConfigurationTagsList <a name="KafkaconnectWorkerConfigurationTagsList" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.Initializer"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

new kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.get"></a>

```typescript
public get(index: number): KafkaconnectWorkerConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectWorkerConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>[]

---


### KafkaconnectWorkerConfigurationTagsOutputReference <a name="KafkaconnectWorkerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { kafkaconnectWorkerConfiguration } from '@cdktn/provider-awscc'

new kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectWorkerConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectWorkerConfiguration.KafkaconnectWorkerConfigurationTags">KafkaconnectWorkerConfigurationTags</a>

---



