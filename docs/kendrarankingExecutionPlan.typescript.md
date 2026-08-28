# `kendrarankingExecutionPlan` Submodule <a name="`kendrarankingExecutionPlan` Submodule" id="@cdktn/provider-awscc.kendrarankingExecutionPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendrarankingExecutionPlan <a name="KendrarankingExecutionPlan" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan awscc_kendraranking_execution_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

new kendrarankingExecutionPlan.KendrarankingExecutionPlan(scope: Construct, id: string, config: KendrarankingExecutionPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig">KendrarankingExecutionPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig">KendrarankingExecutionPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits">putCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetCapacityUnits">resetCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityUnits` <a name="putCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits"></a>

```typescript
public putCapacityUnits(value: KendrarankingExecutionPlanCapacityUnits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags"></a>

```typescript
public putTags(value: IResolvable | KendrarankingExecutionPlanTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>[]

---

##### `resetCapacityUnits` <a name="resetCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetCapacityUnits"></a>

```typescript
public resetCapacityUnits(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KendrarankingExecutionPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KendrarankingExecutionPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KendrarankingExecutionPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference">KendrarankingExecutionPlanCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.executionPlanId">executionPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList">KendrarankingExecutionPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnitsInput">capacityUnitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnits"></a>

```typescript
public readonly capacityUnits: KendrarankingExecutionPlanCapacityUnitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference">KendrarankingExecutionPlanCapacityUnitsOutputReference</a>

---

##### `executionPlanId`<sup>Required</sup> <a name="executionPlanId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.executionPlanId"></a>

```typescript
public readonly executionPlanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tags"></a>

```typescript
public readonly tags: KendrarankingExecutionPlanTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList">KendrarankingExecutionPlanTagsList</a>

---

##### `capacityUnitsInput`<sup>Optional</sup> <a name="capacityUnitsInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnitsInput"></a>

```typescript
public readonly capacityUnitsInput: IResolvable | KendrarankingExecutionPlanCapacityUnits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | KendrarankingExecutionPlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendrarankingExecutionPlanCapacityUnits <a name="KendrarankingExecutionPlanCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.Initializer"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

const kendrarankingExecutionPlanCapacityUnits: kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.property.rescoreCapacityUnits">rescoreCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#rescore_capacity_units KendrarankingExecutionPlan#rescore_capacity_units}. |

---

##### `rescoreCapacityUnits`<sup>Optional</sup> <a name="rescoreCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.property.rescoreCapacityUnits"></a>

```typescript
public readonly rescoreCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#rescore_capacity_units KendrarankingExecutionPlan#rescore_capacity_units}.

---

### KendrarankingExecutionPlanConfig <a name="KendrarankingExecutionPlanConfig" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.Initializer"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

const kendrarankingExecutionPlanConfig: kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.name">name</a></code> | <code>string</code> | Name of kendra ranking rescore execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | Capacity units. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.description">description</a></code> | <code>string</code> | A description for the execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>[]</code> | Tags for labeling the execution plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of kendra ranking rescore execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#name KendrarankingExecutionPlan#name}

---

##### `capacityUnits`<sup>Optional</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.capacityUnits"></a>

```typescript
public readonly capacityUnits: KendrarankingExecutionPlanCapacityUnits;
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

Capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#capacity_units KendrarankingExecutionPlan#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#description KendrarankingExecutionPlan#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | KendrarankingExecutionPlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>[]

Tags for labeling the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#tags KendrarankingExecutionPlan#tags}

---

### KendrarankingExecutionPlanTags <a name="KendrarankingExecutionPlanTags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.Initializer"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

const kendrarankingExecutionPlanTags: kendrarankingExecutionPlan.KendrarankingExecutionPlanTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.key">key</a></code> | <code>string</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.value">value</a></code> | <code>string</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#key KendrarankingExecutionPlan#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendraranking_execution_plan#value KendrarankingExecutionPlan#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendrarankingExecutionPlanCapacityUnitsOutputReference <a name="KendrarankingExecutionPlanCapacityUnitsOutputReference" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

new kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resetRescoreCapacityUnits">resetRescoreCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRescoreCapacityUnits` <a name="resetRescoreCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resetRescoreCapacityUnits"></a>

```typescript
public resetRescoreCapacityUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnitsInput">rescoreCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits">rescoreCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rescoreCapacityUnitsInput`<sup>Optional</sup> <a name="rescoreCapacityUnitsInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnitsInput"></a>

```typescript
public readonly rescoreCapacityUnitsInput: number;
```

- *Type:* number

---

##### `rescoreCapacityUnits`<sup>Required</sup> <a name="rescoreCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits"></a>

```typescript
public readonly rescoreCapacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendrarankingExecutionPlanCapacityUnits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---


### KendrarankingExecutionPlanTagsList <a name="KendrarankingExecutionPlanTagsList" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

new kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get"></a>

```typescript
public get(index: number): KendrarankingExecutionPlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendrarankingExecutionPlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>[]

---


### KendrarankingExecutionPlanTagsOutputReference <a name="KendrarankingExecutionPlanTagsOutputReference" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer"></a>

```typescript
import { kendrarankingExecutionPlan } from '@cdktn/provider-awscc'

new kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendrarankingExecutionPlanTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>

---



