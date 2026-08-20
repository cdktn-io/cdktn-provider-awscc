# `iotFleetMetric` Submodule <a name="`iotFleetMetric` Submodule" id="@cdktn/provider-awscc.iotFleetMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotFleetMetric <a name="IotFleetMetric" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric awscc_iot_fleet_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

new iotFleetMetric.IotFleetMetric(scope: Construct, id: string, config: IotFleetMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig">IotFleetMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig">IotFleetMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType">putAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField">resetAggregationField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType">resetAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion">resetQueryVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregationType` <a name="putAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType"></a>

```typescript
public putAggregationType(value: IotFleetMetricAggregationType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags"></a>

```typescript
public putTags(value: IResolvable | IotFleetMetricTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>[]

---

##### `resetAggregationField` <a name="resetAggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField"></a>

```typescript
public resetAggregationField(): void
```

##### `resetAggregationType` <a name="resetAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType"></a>

```typescript
public resetAggregationType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName"></a>

```typescript
public resetIndexName(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetQueryVersion` <a name="resetQueryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion"></a>

```typescript
public resetQueryVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit"></a>

```typescript
public resetUnit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

iotFleetMetric.IotFleetMetric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

iotFleetMetric.IotFleetMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

iotFleetMetric.IotFleetMetric.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

iotFleetMetric.IotFleetMetric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotFleetMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotFleetMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotFleetMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType">aggregationType</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn">metricArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput">aggregationFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput">queryVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField">aggregationField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion">queryVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit">unit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType"></a>

```typescript
public readonly aggregationType: IotFleetMetricAggregationTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `metricArn`<sup>Required</sup> <a name="metricArn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn"></a>

```typescript
public readonly metricArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags"></a>

```typescript
public readonly tags: IotFleetMetricTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `aggregationFieldInput`<sup>Optional</sup> <a name="aggregationFieldInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput"></a>

```typescript
public readonly aggregationFieldInput: string;
```

- *Type:* string

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput"></a>

```typescript
public readonly aggregationTypeInput: IResolvable | IotFleetMetricAggregationType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `queryVersionInput`<sup>Optional</sup> <a name="queryVersionInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput"></a>

```typescript
public readonly queryVersionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotFleetMetricTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>[]

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `aggregationField`<sup>Required</sup> <a name="aggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField"></a>

```typescript
public readonly aggregationField: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `queryVersion`<sup>Required</sup> <a name="queryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion"></a>

```typescript
public readonly queryVersion: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotFleetMetricAggregationType <a name="IotFleetMetricAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.Initializer"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

const iotFleetMetricAggregationType: iotFleetMetric.IotFleetMetricAggregationType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name">name</a></code> | <code>string</code> | Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values">values</a></code> | <code>string[]</code> | Fleet Indexing aggregation type values. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#name IotFleetMetric#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Fleet Indexing aggregation type values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#values IotFleetMetric#values}

---

### IotFleetMetricConfig <a name="IotFleetMetricConfig" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.Initializer"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

const iotFleetMetricConfig: iotFleetMetric.IotFleetMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName">metricName</a></code> | <code>string</code> | The name of the fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField">aggregationField</a></code> | <code>string</code> | The aggregation field to perform aggregation and metric emission. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType">aggregationType</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | Aggregation types supported by Fleet Indexing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description">description</a></code> | <code>string</code> | The description of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName">indexName</a></code> | <code>string</code> | The index name of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period">period</a></code> | <code>number</code> | The period of metric emission in seconds. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString">queryString</a></code> | <code>string</code> | The Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion">queryVersion</a></code> | <code>string</code> | The version of a Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit">unit</a></code> | <code>string</code> | The unit of data points emitted by a fleet metric. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#metric_name IotFleetMetric#metric_name}

---

##### `aggregationField`<sup>Optional</sup> <a name="aggregationField" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField"></a>

```typescript
public readonly aggregationField: string;
```

- *Type:* string

The aggregation field to perform aggregation and metric emission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#aggregation_field IotFleetMetric#aggregation_field}

---

##### `aggregationType`<sup>Optional</sup> <a name="aggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType"></a>

```typescript
public readonly aggregationType: IotFleetMetricAggregationType;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

Aggregation types supported by Fleet Indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#aggregation_type IotFleetMetric#aggregation_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#description IotFleetMetric#description}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The index name of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#index_name IotFleetMetric#index_name}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The period of metric emission in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#period IotFleetMetric#period}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

The Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#query_string IotFleetMetric#query_string}

---

##### `queryVersion`<sup>Optional</sup> <a name="queryVersion" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion"></a>

```typescript
public readonly queryVersion: string;
```

- *Type:* string

The version of a Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#query_version IotFleetMetric#query_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotFleetMetricTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#tags IotFleetMetric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit of data points emitted by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#unit IotFleetMetric#unit}

---

### IotFleetMetricTags <a name="IotFleetMetricTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.Initializer"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

const iotFleetMetricTags: iotFleetMetric.IotFleetMetricTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#key IotFleetMetric#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_fleet_metric#value IotFleetMetric#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotFleetMetricAggregationTypeOutputReference <a name="IotFleetMetricAggregationTypeOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

new iotFleetMetric.IotFleetMetricAggregationTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotFleetMetricAggregationType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---


### IotFleetMetricTagsList <a name="IotFleetMetricTagsList" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

new iotFleetMetric.IotFleetMetricTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get"></a>

```typescript
public get(index: number): IotFleetMetricTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotFleetMetricTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>[]

---


### IotFleetMetricTagsOutputReference <a name="IotFleetMetricTagsOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer"></a>

```typescript
import { iotFleetMetric } from '@cdktn/provider-awscc'

new iotFleetMetric.IotFleetMetricTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotFleetMetricTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>

---



