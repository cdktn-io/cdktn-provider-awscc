# `iotTopicRuleDestination` Submodule <a name="`iotTopicRuleDestination` Submodule" id="@cdktn/provider-awscc.iotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTopicRuleDestination <a name="IotTopicRuleDestination" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination awscc_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

new iotTopicRuleDestination.IotTopicRuleDestination(scope: Construct, id: string, config?: IotTopicRuleDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig">IotTopicRuleDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig">IotTopicRuleDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties">putHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties">putVpcProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties">resetHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties">resetVpcProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHttpUrlProperties` <a name="putHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties"></a>

```typescript
public putHttpUrlProperties(value: IotTopicRuleDestinationHttpUrlProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---

##### `putVpcProperties` <a name="putVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties"></a>

```typescript
public putVpcProperties(value: IotTopicRuleDestinationVpcProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---

##### `resetHttpUrlProperties` <a name="resetHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties"></a>

```typescript
public resetHttpUrlProperties(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetVpcProperties` <a name="resetVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties"></a>

```typescript
public resetVpcProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

iotTopicRuleDestination.IotTopicRuleDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotTopicRuleDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotTopicRuleDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotTopicRuleDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties">httpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties">vpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput">httpUrlPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput">vpcPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `httpUrlProperties`<sup>Required</sup> <a name="httpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties"></a>

```typescript
public readonly httpUrlProperties: IotTopicRuleDestinationHttpUrlPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `vpcProperties`<sup>Required</sup> <a name="vpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties"></a>

```typescript
public readonly vpcProperties: IotTopicRuleDestinationVpcPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a>

---

##### `httpUrlPropertiesInput`<sup>Optional</sup> <a name="httpUrlPropertiesInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput"></a>

```typescript
public readonly httpUrlPropertiesInput: IResolvable | IotTopicRuleDestinationHttpUrlProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `vpcPropertiesInput`<sup>Optional</sup> <a name="vpcPropertiesInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput"></a>

```typescript
public readonly vpcPropertiesInput: IResolvable | IotTopicRuleDestinationVpcProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTopicRuleDestinationConfig <a name="IotTopicRuleDestinationConfig" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

const iotTopicRuleDestinationConfig: iotTopicRuleDestination.IotTopicRuleDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties">httpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | HTTP URL destination properties. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status">status</a></code> | <code>string</code> | The status of the TopicRuleDestination. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties">vpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | VPC destination properties. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `httpUrlProperties`<sup>Optional</sup> <a name="httpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties"></a>

```typescript
public readonly httpUrlProperties: IotTopicRuleDestinationHttpUrlProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

HTTP URL destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#http_url_properties IotTopicRuleDestination#http_url_properties}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the TopicRuleDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#status IotTopicRuleDestination#status}

---

##### `vpcProperties`<sup>Optional</sup> <a name="vpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties"></a>

```typescript
public readonly vpcProperties: IotTopicRuleDestinationVpcProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

VPC destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#vpc_properties IotTopicRuleDestination#vpc_properties}

---

### IotTopicRuleDestinationHttpUrlProperties <a name="IotTopicRuleDestinationHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

const iotTopicRuleDestinationHttpUrlProperties: iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl">confirmationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}. |

---

##### `confirmationUrl`<sup>Optional</sup> <a name="confirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl"></a>

```typescript
public readonly confirmationUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}.

---

### IotTopicRuleDestinationVpcProperties <a name="IotTopicRuleDestinationVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

const iotTopicRuleDestinationVpcProperties: iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTopicRuleDestinationHttpUrlPropertiesOutputReference <a name="IotTopicRuleDestinationHttpUrlPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

new iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl">resetConfirmationUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfirmationUrl` <a name="resetConfirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl"></a>

```typescript
public resetConfirmationUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput">confirmationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl">confirmationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confirmationUrlInput`<sup>Optional</sup> <a name="confirmationUrlInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput"></a>

```typescript
public readonly confirmationUrlInput: string;
```

- *Type:* string

---

##### `confirmationUrl`<sup>Required</sup> <a name="confirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl"></a>

```typescript
public readonly confirmationUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleDestinationHttpUrlProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---


### IotTopicRuleDestinationVpcPropertiesOutputReference <a name="IotTopicRuleDestinationVpcPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktn/provider-awscc'

new iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleDestinationVpcProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---



