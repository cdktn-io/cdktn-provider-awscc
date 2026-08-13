# `logsDeliveryDestination` Submodule <a name="`logsDeliveryDestination` Submodule" id="@cdktn/provider-awscc.logsDeliveryDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDeliveryDestination <a name="LogsDeliveryDestination" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination awscc_logs_delivery_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

new logsDeliveryDestination.LogsDeliveryDestination(scope: Construct, id: string, config: LogsDeliveryDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig">LogsDeliveryDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig">LogsDeliveryDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy">putDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy">resetDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType">resetDeliveryDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn">resetDestinationResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryDestinationPolicy` <a name="putDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy"></a>

```typescript
public putDeliveryDestinationPolicy(value: LogsDeliveryDestinationDeliveryDestinationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags"></a>

```typescript
public putTags(value: IResolvable | LogsDeliveryDestinationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

---

##### `resetDeliveryDestinationPolicy` <a name="resetDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy"></a>

```typescript
public resetDeliveryDestinationPolicy(): void
```

##### `resetDeliveryDestinationType` <a name="resetDeliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType"></a>

```typescript
public resetDeliveryDestinationType(): void
```

##### `resetDestinationResourceArn` <a name="resetDestinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn"></a>

```typescript
public resetDestinationResourceArn(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

logsDeliveryDestination.LogsDeliveryDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsDeliveryDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsDeliveryDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsDeliveryDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput">deliveryDestinationPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput">deliveryDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput">destinationResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType">deliveryDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn">destinationResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deliveryDestinationPolicy`<sup>Required</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy"></a>

```typescript
public readonly deliveryDestinationPolicy: LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags"></a>

```typescript
public readonly tags: LogsDeliveryDestinationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a>

---

##### `deliveryDestinationPolicyInput`<sup>Optional</sup> <a name="deliveryDestinationPolicyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput"></a>

```typescript
public readonly deliveryDestinationPolicyInput: IResolvable | LogsDeliveryDestinationDeliveryDestinationPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---

##### `deliveryDestinationTypeInput`<sup>Optional</sup> <a name="deliveryDestinationTypeInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput"></a>

```typescript
public readonly deliveryDestinationTypeInput: string;
```

- *Type:* string

---

##### `destinationResourceArnInput`<sup>Optional</sup> <a name="destinationResourceArnInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput"></a>

```typescript
public readonly destinationResourceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LogsDeliveryDestinationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

---

##### `deliveryDestinationType`<sup>Required</sup> <a name="deliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType"></a>

```typescript
public readonly deliveryDestinationType: string;
```

- *Type:* string

---

##### `destinationResourceArn`<sup>Required</sup> <a name="destinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn"></a>

```typescript
public readonly destinationResourceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliveryDestinationConfig <a name="LogsDeliveryDestinationConfig" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.Initializer"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

const logsDeliveryDestinationConfig: logsDeliveryDestination.LogsDeliveryDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name">name</a></code> | <code>string</code> | The name of this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType">deliveryDestinationType</a></code> | <code>string</code> | Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn">destinationResourceArn</a></code> | <code>string</code> | The ARN of the Amazon Web Services destination that this delivery destination represents. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat">outputFormat</a></code> | <code>string</code> | The format of the logs that are sent to this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]</code> | The tags that have been assigned to this delivery destination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#name LogsDeliveryDestination#name}

---

##### `deliveryDestinationPolicy`<sup>Optional</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy"></a>

```typescript
public readonly deliveryDestinationPolicy: LogsDeliveryDestinationDeliveryDestinationPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

##### `deliveryDestinationType`<sup>Optional</sup> <a name="deliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType"></a>

```typescript
public readonly deliveryDestinationType: string;
```

- *Type:* string

Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#delivery_destination_type LogsDeliveryDestination#delivery_destination_type}

---

##### `destinationResourceArn`<sup>Optional</sup> <a name="destinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn"></a>

```typescript
public readonly destinationResourceArn: string;
```

- *Type:* string

The ARN of the Amazon Web Services destination that this delivery destination represents.

That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#destination_resource_arn LogsDeliveryDestination#destination_resource_arn}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The format of the logs that are sent to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#output_format LogsDeliveryDestination#output_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LogsDeliveryDestinationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

The tags that have been assigned to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#tags LogsDeliveryDestination#tags}

---

### LogsDeliveryDestinationDeliveryDestinationPolicy <a name="LogsDeliveryDestinationDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.Initializer"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

const logsDeliveryDestinationDeliveryDestinationPolicy: logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName">deliveryDestinationName</a></code> | <code>string</code> | The name of the delivery destination to assign this policy to. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code>string</code> | The contents of the policy attached to the delivery destination. |

---

##### `deliveryDestinationName`<sup>Optional</sup> <a name="deliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName"></a>

```typescript
public readonly deliveryDestinationName: string;
```

- *Type:* string

The name of the delivery destination to assign this policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#delivery_destination_name LogsDeliveryDestination#delivery_destination_name}

---

##### `deliveryDestinationPolicy`<sup>Optional</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy"></a>

```typescript
public readonly deliveryDestinationPolicy: string;
```

- *Type:* string

The contents of the policy attached to the delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

### LogsDeliveryDestinationTags <a name="LogsDeliveryDestinationTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.Initializer"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

const logsDeliveryDestinationTags: logsDeliveryDestination.LogsDeliveryDestinationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#key LogsDeliveryDestination#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_destination#value LogsDeliveryDestination#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference <a name="LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

new logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName">resetDeliveryDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy">resetDeliveryDestinationPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryDestinationName` <a name="resetDeliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName"></a>

```typescript
public resetDeliveryDestinationName(): void
```

##### `resetDeliveryDestinationPolicy` <a name="resetDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy"></a>

```typescript
public resetDeliveryDestinationPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput">deliveryDestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput">deliveryDestinationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName">deliveryDestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryDestinationNameInput`<sup>Optional</sup> <a name="deliveryDestinationNameInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput"></a>

```typescript
public readonly deliveryDestinationNameInput: string;
```

- *Type:* string

---

##### `deliveryDestinationPolicyInput`<sup>Optional</sup> <a name="deliveryDestinationPolicyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput"></a>

```typescript
public readonly deliveryDestinationPolicyInput: string;
```

- *Type:* string

---

##### `deliveryDestinationName`<sup>Required</sup> <a name="deliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName"></a>

```typescript
public readonly deliveryDestinationName: string;
```

- *Type:* string

---

##### `deliveryDestinationPolicy`<sup>Required</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy"></a>

```typescript
public readonly deliveryDestinationPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsDeliveryDestinationDeliveryDestinationPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---


### LogsDeliveryDestinationTagsList <a name="LogsDeliveryDestinationTagsList" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

new logsDeliveryDestination.LogsDeliveryDestinationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get"></a>

```typescript
public get(index: number): LogsDeliveryDestinationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsDeliveryDestinationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

---


### LogsDeliveryDestinationTagsOutputReference <a name="LogsDeliveryDestinationTagsOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer"></a>

```typescript
import { logsDeliveryDestination } from '@cdktn/provider-awscc'

new logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsDeliveryDestinationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>

---



