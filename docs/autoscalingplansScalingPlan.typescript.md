# `autoscalingplansScalingPlan` Submodule <a name="`autoscalingplansScalingPlan` Submodule" id="@cdktn/provider-awscc.autoscalingplansScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingplansScalingPlan <a name="AutoscalingplansScalingPlan" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlan(scope: Construct, id: string, config: AutoscalingplansScalingPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig">AutoscalingplansScalingPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig">AutoscalingplansScalingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource">putApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstructions">putScalingInstructions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationSource` <a name="putApplicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource"></a>

```typescript
public putApplicationSource(value: AutoscalingplansScalingPlanApplicationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `putScalingInstructions` <a name="putScalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstructions"></a>

```typescript
public putScalingInstructions(value: IResolvable | AutoscalingplansScalingPlanScalingInstructions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingplansScalingPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingplansScalingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingplansScalingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructions">scalingInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList">AutoscalingplansScalingPlanScalingInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanArn">scalingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanName">scalingPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion">scalingPlanVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput">applicationSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionsInput">scalingInstructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource"></a>

```typescript
public readonly applicationSource: AutoscalingplansScalingPlanApplicationSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scalingInstructions`<sup>Required</sup> <a name="scalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructions"></a>

```typescript
public readonly scalingInstructions: AutoscalingplansScalingPlanScalingInstructionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList">AutoscalingplansScalingPlanScalingInstructionsList</a>

---

##### `scalingPlanArn`<sup>Required</sup> <a name="scalingPlanArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanArn"></a>

```typescript
public readonly scalingPlanArn: string;
```

- *Type:* string

---

##### `scalingPlanName`<sup>Required</sup> <a name="scalingPlanName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanName"></a>

```typescript
public readonly scalingPlanName: string;
```

- *Type:* string

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="scalingPlanVersion" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion"></a>

```typescript
public readonly scalingPlanVersion: string;
```

- *Type:* string

---

##### `applicationSourceInput`<sup>Optional</sup> <a name="applicationSourceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput"></a>

```typescript
public readonly applicationSourceInput: IResolvable | AutoscalingplansScalingPlanApplicationSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `scalingInstructionsInput`<sup>Optional</sup> <a name="scalingInstructionsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionsInput"></a>

```typescript
public readonly scalingInstructionsInput: IResolvable | AutoscalingplansScalingPlanScalingInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingplansScalingPlanApplicationSource <a name="AutoscalingplansScalingPlanApplicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanApplicationSource: autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a CloudFormation stack. The stack must contain at least one scalable resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilters">tagFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>[]</code> | A set of tag filters (keys and values). |

---

##### `cloudformationStackArn`<sup>Optional</sup> <a name="cloudformationStackArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn"></a>

```typescript
public readonly cloudformationStackArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of a CloudFormation stack. The stack must contain at least one scalable resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilters"></a>

```typescript
public readonly tagFilters: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>[]

A set of tag filters (keys and values).

Each tag filter specified must contain a key with values as optional. Each scaling plan can include up to 50 keys, and each key can include up to 20 values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#tag_filters AutoscalingplansScalingPlan#tag_filters}

---

### AutoscalingplansScalingPlanApplicationSourceTagFilters <a name="AutoscalingplansScalingPlanApplicationSourceTagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanApplicationSourceTagFilters: autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.values">values</a></code> | <code>string[]</code> | The tag values (0 to 20). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#key AutoscalingplansScalingPlan#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The tag values (0 to 20).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#values AutoscalingplansScalingPlan#values}

---

### AutoscalingplansScalingPlanConfig <a name="AutoscalingplansScalingPlanConfig" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanConfig: autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | A CloudFormation stack or a set of tags. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstructions">scalingInstructions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>[]</code> | The scaling instructions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource"></a>

```typescript
public readonly applicationSource: AutoscalingplansScalingPlanApplicationSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

A CloudFormation stack or a set of tags.

You can create one scaling plan per application source. The ApplicationSource property must be present to ensure interoperability with the AWS Auto Scaling console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#application_source AutoscalingplansScalingPlan#application_source}

---

##### `scalingInstructions`<sup>Required</sup> <a name="scalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstructions"></a>

```typescript
public readonly scalingInstructions: IResolvable | AutoscalingplansScalingPlanScalingInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>[]

The scaling instructions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_instructions AutoscalingplansScalingPlan#scaling_instructions}

---

### AutoscalingplansScalingPlanScalingInstructions <a name="AutoscalingplansScalingPlanScalingInstructions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructions: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | The maximum capacity of the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.minCapacity">minCapacity</a></code> | <code>number</code> | The minimum capacity of the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.resourceId">resourceId</a></code> | <code>string</code> | The ID of the resource. This string consists of the resource type and unique identifier. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | The scalable dimension associated with the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | The namespace of the AWS service. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.targetTrackingConfigurations">targetTrackingConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>[]</code> | The target tracking configurations (up to 10). |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a></code> | The customized load metric to use for predictive scaling. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>boolean \| cdktn.IResolvable</code> | Controls whether dynamic scaling is disabled. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a></code> | The predefined load metric to use for predictive scaling. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>string</code> | Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>number</code> | The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>string</code> | The predictive scaling mode. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>string</code> | Controls whether a resource's externally created scaling policies are deleted and new target tracking scaling policies created. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>number</code> | The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. |

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

The maximum capacity of the resource.

The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#max_capacity AutoscalingplansScalingPlan#max_capacity}

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

The minimum capacity of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#min_capacity AutoscalingplansScalingPlan#min_capacity}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ID of the resource. This string consists of the resource type and unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_id AutoscalingplansScalingPlan#resource_id}

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

The scalable dimension associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

The namespace of the AWS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#service_namespace AutoscalingplansScalingPlan#service_namespace}

---

##### `targetTrackingConfigurations`<sup>Required</sup> <a name="targetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.targetTrackingConfigurations"></a>

```typescript
public readonly targetTrackingConfigurations: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>[]

The target tracking configurations (up to 10).

Each of these structures must specify a unique scaling metric and a target value for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_tracking_configurations AutoscalingplansScalingPlan#target_tracking_configurations}

---

##### `customizedLoadMetricSpecification`<sup>Optional</sup> <a name="customizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.customizedLoadMetricSpecification"></a>

```typescript
public readonly customizedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

The customized load metric to use for predictive scaling.

This property or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_load_metric_specification AutoscalingplansScalingPlan#customized_load_metric_specification}

---

##### `disableDynamicScaling`<sup>Optional</sup> <a name="disableDynamicScaling" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.disableDynamicScaling"></a>

```typescript
public readonly disableDynamicScaling: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Controls whether dynamic scaling is disabled.

When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations. The default is enabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}

---

##### `predefinedLoadMetricSpecification`<sup>Optional</sup> <a name="predefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predefinedLoadMetricSpecification"></a>

```typescript
public readonly predefinedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

The predefined load metric to use for predictive scaling.

This property or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_specification AutoscalingplansScalingPlan#predefined_load_metric_specification}

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBehavior"></a>

```typescript
public readonly predictiveScalingMaxCapacityBehavior: string;
```

- *Type:* string

Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource.

The default value is SetForecastCapacityToMaxCapacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMaxCapacityBuffer"></a>

```typescript
public readonly predictiveScalingMaxCapacityBuffer: number;
```

- *Type:* number

The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity.

The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer. The range is 1-100. Required if PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity, and cannot be used otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}

---

##### `predictiveScalingMode`<sup>Optional</sup> <a name="predictiveScalingMode" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.predictiveScalingMode"></a>

```typescript
public readonly predictiveScalingMode: string;
```

- *Type:* string

The predictive scaling mode.

The default value is ForecastAndScale. Otherwise, AWS Auto Scaling forecasts capacity but does not apply any scheduled scaling actions based on the capacity forecast.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}

---

##### `scalingPolicyUpdateBehavior`<sup>Optional</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scalingPolicyUpdateBehavior"></a>

```typescript
public readonly scalingPolicyUpdateBehavior: string;
```

- *Type:* string

Controls whether a resource's externally created scaling policies are deleted and new target tracking scaling policies created.

The default value is KeepExternalPolicies. Valid only when configuring dynamic scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}

---

##### `scheduledActionBufferTime`<sup>Optional</sup> <a name="scheduledActionBufferTime" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions.property.scheduledActionBufferTime"></a>

```typescript
public readonly scheduledActionBufferTime: number;
```

- *Type:* number

The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out.

The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds. Valid only when configuring predictive scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}

---

### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>[]</code> | The dimensions of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.statistic">statistic</a></code> | <code>string</code> | The statistic of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.unit">unit</a></code> | <code>string</code> | The unit of the metric. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>[]

The dimensions of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

The statistic of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}

---

### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.name">name</a></code> | <code>string</code> | The name of the dimension. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.value">value</a></code> | <code>string</code> | The value of the dimension. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value AutoscalingplansScalingPlan#value}

---

### AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>string</code> | The metric type. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Identifies the resource associated with the metric type. |

---

##### `predefinedLoadMetricType`<sup>Optional</sup> <a name="predefinedLoadMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.predefinedLoadMetricType"></a>

```typescript
public readonly predefinedLoadMetricType: string;
```

- *Type:* string

The metric type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Identifies the resource associated with the metric type.

You can't specify a resource label unless the metric type is ALBTargetGroupRequestCount and there is a target group for an Application Load Balancer attached to the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.targetValue">targetValue</a></code> | <code>number</code> | The target value for the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a></code> | A customized metric. You can specify either a predefined metric or a customized metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether scale in by the target tracking scaling policy is disabled. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a></code> | A predefined metric. You can specify either a predefined metric or a customized metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

The target value for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_value AutoscalingplansScalingPlan#target_value}

---

##### `customizedScalingMetricSpecification`<sup>Optional</sup> <a name="customizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.customizedScalingMetricSpecification"></a>

```typescript
public readonly customizedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

A customized metric. You can specify either a predefined metric or a customized metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_scaling_metric_specification AutoscalingplansScalingPlan#customized_scaling_metric_specification}

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether scale in by the target tracking scaling policy is disabled.

If the value is true, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="estimatedInstanceWarmup" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.

This value is used only if the resource is an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}

---

##### `predefinedScalingMetricSpecification`<sup>Optional</sup> <a name="predefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.predefinedScalingMetricSpecification"></a>

```typescript
public readonly predefinedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

A predefined metric. You can specify either a predefined metric or a customized metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_specification AutoscalingplansScalingPlan#predefined_scaling_metric_specification}

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start.

This value is not used if the scalable resource is an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.

This value is not used if the scalable resource is an Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>[]</code> | The dimensions of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.statistic">statistic</a></code> | <code>string</code> | The statistic of the metric. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.unit">unit</a></code> | <code>string</code> | The unit of the metric. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>[]

The dimensions of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

The statistic of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.name">name</a></code> | <code>string</code> | The name of the dimension. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.value">value</a></code> | <code>string</code> | The value of the dimension. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value AutoscalingplansScalingPlan#value}

---

### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

const autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>string</code> | The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Identifies the resource associated with the metric type. |

---

##### `predefinedScalingMetricType`<sup>Optional</sup> <a name="predefinedScalingMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.predefinedScalingMetricType"></a>

```typescript
public readonly predefinedScalingMetricType: string;
```

- *Type:* string

The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Identifies the resource associated with the metric type.

You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingplansScalingPlanApplicationSourceOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn">resetCloudformationStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilters"></a>

```typescript
public putTagFilters(value: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>[]

---

##### `resetCloudformationStackArn` <a name="resetCloudformationStackArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn"></a>

```typescript
public resetCloudformationStackArn(): void
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilters"></a>

```typescript
public resetTagFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList">AutoscalingplansScalingPlanApplicationSourceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput">cloudformationStackArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilters"></a>

```typescript
public readonly tagFilters: AutoscalingplansScalingPlanApplicationSourceTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList">AutoscalingplansScalingPlanApplicationSourceTagFiltersList</a>

---

##### `cloudformationStackArnInput`<sup>Optional</sup> <a name="cloudformationStackArnInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput"></a>

```typescript
public readonly cloudformationStackArnInput: string;
```

- *Type:* string

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFiltersInput"></a>

```typescript
public readonly tagFiltersInput: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>[]

---

##### `cloudformationStackArn`<sup>Required</sup> <a name="cloudformationStackArn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn"></a>

```typescript
public readonly cloudformationStackArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanApplicationSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---


### AutoscalingplansScalingPlanApplicationSourceTagFiltersList <a name="AutoscalingplansScalingPlanApplicationSourceTagFiltersList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>[]

---


### AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilters">AutoscalingplansScalingPlanApplicationSourceTagFilters</a>

---


### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>[]

---


### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>

---


### AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionsList <a name="AutoscalingplansScalingPlanScalingInstructionsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanScalingInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>[]

---


### AutoscalingplansScalingPlanScalingInstructionsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putCustomizedLoadMetricSpecification">putCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putPredefinedLoadMetricSpecification">putPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putTargetTrackingConfigurations">putTargetTrackingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetCustomizedLoadMetricSpecification">resetCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetDisableDynamicScaling">resetDisableDynamicScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredefinedLoadMetricSpecification">resetPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBehavior">resetPredictiveScalingMaxCapacityBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBuffer">resetPredictiveScalingMaxCapacityBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMode">resetPredictiveScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScalingPolicyUpdateBehavior">resetScalingPolicyUpdateBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScheduledActionBufferTime">resetScheduledActionBufferTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedLoadMetricSpecification` <a name="putCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putCustomizedLoadMetricSpecification"></a>

```typescript
public putCustomizedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putCustomizedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

---

##### `putPredefinedLoadMetricSpecification` <a name="putPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putPredefinedLoadMetricSpecification"></a>

```typescript
public putPredefinedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putPredefinedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

---

##### `putTargetTrackingConfigurations` <a name="putTargetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putTargetTrackingConfigurations"></a>

```typescript
public putTargetTrackingConfigurations(value: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.putTargetTrackingConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>[]

---

##### `resetCustomizedLoadMetricSpecification` <a name="resetCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetCustomizedLoadMetricSpecification"></a>

```typescript
public resetCustomizedLoadMetricSpecification(): void
```

##### `resetDisableDynamicScaling` <a name="resetDisableDynamicScaling" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetDisableDynamicScaling"></a>

```typescript
public resetDisableDynamicScaling(): void
```

##### `resetPredefinedLoadMetricSpecification` <a name="resetPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredefinedLoadMetricSpecification"></a>

```typescript
public resetPredefinedLoadMetricSpecification(): void
```

##### `resetPredictiveScalingMaxCapacityBehavior` <a name="resetPredictiveScalingMaxCapacityBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBehavior"></a>

```typescript
public resetPredictiveScalingMaxCapacityBehavior(): void
```

##### `resetPredictiveScalingMaxCapacityBuffer` <a name="resetPredictiveScalingMaxCapacityBuffer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMaxCapacityBuffer"></a>

```typescript
public resetPredictiveScalingMaxCapacityBuffer(): void
```

##### `resetPredictiveScalingMode` <a name="resetPredictiveScalingMode" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetPredictiveScalingMode"></a>

```typescript
public resetPredictiveScalingMode(): void
```

##### `resetScalingPolicyUpdateBehavior` <a name="resetScalingPolicyUpdateBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScalingPolicyUpdateBehavior"></a>

```typescript
public resetScalingPolicyUpdateBehavior(): void
```

##### `resetScheduledActionBufferTime` <a name="resetScheduledActionBufferTime" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.resetScheduledActionBufferTime"></a>

```typescript
public resetScheduledActionBufferTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurations">targetTrackingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecificationInput">customizedLoadMetricSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScalingInput">disableDynamicScalingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecificationInput">predefinedLoadMetricSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehaviorInput">predictiveScalingMaxCapacityBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBufferInput">predictiveScalingMaxCapacityBufferInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingModeInput">predictiveScalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehaviorInput">scalingPolicyUpdateBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTimeInput">scheduledActionBufferTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurationsInput">targetTrackingConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizedLoadMetricSpecification`<sup>Required</sup> <a name="customizedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecification"></a>

```typescript
public readonly customizedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference</a>

---

##### `predefinedLoadMetricSpecification`<sup>Required</sup> <a name="predefinedLoadMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecification"></a>

```typescript
public readonly predefinedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `targetTrackingConfigurations`<sup>Required</sup> <a name="targetTrackingConfigurations" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurations"></a>

```typescript
public readonly targetTrackingConfigurations: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList</a>

---

##### `customizedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="customizedLoadMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecificationInput"></a>

```typescript
public readonly customizedLoadMetricSpecificationInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

---

##### `disableDynamicScalingInput`<sup>Optional</sup> <a name="disableDynamicScalingInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScalingInput"></a>

```typescript
public readonly disableDynamicScalingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: number;
```

- *Type:* number

---

##### `predefinedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedLoadMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecificationInput"></a>

```typescript
public readonly predefinedLoadMetricSpecificationInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

---

##### `predictiveScalingMaxCapacityBehaviorInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehaviorInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehaviorInput"></a>

```typescript
public readonly predictiveScalingMaxCapacityBehaviorInput: string;
```

- *Type:* string

---

##### `predictiveScalingMaxCapacityBufferInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBufferInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBufferInput"></a>

```typescript
public readonly predictiveScalingMaxCapacityBufferInput: number;
```

- *Type:* number

---

##### `predictiveScalingModeInput`<sup>Optional</sup> <a name="predictiveScalingModeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingModeInput"></a>

```typescript
public readonly predictiveScalingModeInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimensionInput"></a>

```typescript
public readonly scalableDimensionInput: string;
```

- *Type:* string

---

##### `scalingPolicyUpdateBehaviorInput`<sup>Optional</sup> <a name="scalingPolicyUpdateBehaviorInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehaviorInput"></a>

```typescript
public readonly scalingPolicyUpdateBehaviorInput: string;
```

- *Type:* string

---

##### `scheduledActionBufferTimeInput`<sup>Optional</sup> <a name="scheduledActionBufferTimeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTimeInput"></a>

```typescript
public readonly scheduledActionBufferTimeInput: number;
```

- *Type:* number

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespaceInput"></a>

```typescript
public readonly serviceNamespaceInput: string;
```

- *Type:* string

---

##### `targetTrackingConfigurationsInput`<sup>Optional</sup> <a name="targetTrackingConfigurationsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurationsInput"></a>

```typescript
public readonly targetTrackingConfigurationsInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>[]

---

##### `disableDynamicScaling`<sup>Required</sup> <a name="disableDynamicScaling" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScaling"></a>

```typescript
public readonly disableDynamicScaling: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehavior"></a>

```typescript
public readonly predictiveScalingMaxCapacityBehavior: string;
```

- *Type:* string

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBuffer"></a>

```typescript
public readonly predictiveScalingMaxCapacityBuffer: number;
```

- *Type:* number

---

##### `predictiveScalingMode`<sup>Required</sup> <a name="predictiveScalingMode" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMode"></a>

```typescript
public readonly predictiveScalingMode: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

---

##### `scalingPolicyUpdateBehavior`<sup>Required</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehavior"></a>

```typescript
public readonly scalingPolicyUpdateBehavior: string;
```

- *Type:* string

---

##### `scheduledActionBufferTime`<sup>Required</sup> <a name="scheduledActionBufferTime" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTime"></a>

```typescript
public readonly scheduledActionBufferTime: number;
```

- *Type:* number

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructions">AutoscalingplansScalingPlanScalingInstructions</a>

---


### AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetPredefinedLoadMetricType">resetPredefinedLoadMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedLoadMetricType` <a name="resetPredefinedLoadMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetPredefinedLoadMetricType"></a>

```typescript
public resetPredefinedLoadMetricType(): void
```

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel"></a>

```typescript
public resetResourceLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput">predefinedLoadMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedLoadMetricTypeInput`<sup>Optional</sup> <a name="predefinedLoadMetricTypeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput"></a>

```typescript
public readonly predefinedLoadMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedLoadMetricType`<sup>Required</sup> <a name="predefinedLoadMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType"></a>

```typescript
public readonly predefinedLoadMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>[]

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>[]

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putCustomizedScalingMetricSpecification">putCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putPredefinedScalingMetricSpecification">putPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetCustomizedScalingMetricSpecification">resetCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetEstimatedInstanceWarmup">resetEstimatedInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetPredefinedScalingMetricSpecification">resetPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedScalingMetricSpecification` <a name="putCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putCustomizedScalingMetricSpecification"></a>

```typescript
public putCustomizedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putCustomizedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

---

##### `putPredefinedScalingMetricSpecification` <a name="putPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putPredefinedScalingMetricSpecification"></a>

```typescript
public putPredefinedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.putPredefinedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

---

##### `resetCustomizedScalingMetricSpecification` <a name="resetCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetCustomizedScalingMetricSpecification"></a>

```typescript
public resetCustomizedScalingMetricSpecification(): void
```

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetDisableScaleIn"></a>

```typescript
public resetDisableScaleIn(): void
```

##### `resetEstimatedInstanceWarmup` <a name="resetEstimatedInstanceWarmup" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetEstimatedInstanceWarmup"></a>

```typescript
public resetEstimatedInstanceWarmup(): void
```

##### `resetPredefinedScalingMetricSpecification` <a name="resetPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetPredefinedScalingMetricSpecification"></a>

```typescript
public resetPredefinedScalingMetricSpecification(): void
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleInCooldown"></a>

```typescript
public resetScaleInCooldown(): void
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resetScaleOutCooldown"></a>

```typescript
public resetScaleOutCooldown(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecificationInput">customizedScalingMetricSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmupInput">estimatedInstanceWarmupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecificationInput">predefinedScalingMetricSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizedScalingMetricSpecification`<sup>Required</sup> <a name="customizedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecification"></a>

```typescript
public readonly customizedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference</a>

---

##### `predefinedScalingMetricSpecification`<sup>Required</sup> <a name="predefinedScalingMetricSpecification" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecification"></a>

```typescript
public readonly predefinedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `customizedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="customizedScalingMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecificationInput"></a>

```typescript
public readonly customizedScalingMetricSpecificationInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleInInput"></a>

```typescript
public readonly disableScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `estimatedInstanceWarmupInput`<sup>Optional</sup> <a name="estimatedInstanceWarmupInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmupInput"></a>

```typescript
public readonly estimatedInstanceWarmupInput: number;
```

- *Type:* number

---

##### `predefinedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedScalingMetricSpecificationInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecificationInput"></a>

```typescript
public readonly predefinedScalingMetricSpecificationInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldownInput"></a>

```typescript
public readonly scaleInCooldownInput: number;
```

- *Type:* number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldownInput"></a>

```typescript
public readonly scaleOutCooldownInput: number;
```

- *Type:* number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `estimatedInstanceWarmup`<sup>Required</sup> <a name="estimatedInstanceWarmup" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>

---


### AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktn/provider-awscc'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetPredefinedScalingMetricType">resetPredefinedScalingMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedScalingMetricType` <a name="resetPredefinedScalingMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetPredefinedScalingMetricType"></a>

```typescript
public resetPredefinedScalingMetricType(): void
```

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel"></a>

```typescript
public resetResourceLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput">predefinedScalingMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedScalingMetricTypeInput`<sup>Optional</sup> <a name="predefinedScalingMetricTypeInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput"></a>

```typescript
public readonly predefinedScalingMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedScalingMetricType`<sup>Required</sup> <a name="predefinedScalingMetricType" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType"></a>

```typescript
public readonly predefinedScalingMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

---



