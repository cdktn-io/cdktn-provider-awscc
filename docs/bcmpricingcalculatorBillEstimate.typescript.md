# `bcmpricingcalculatorBillEstimate` Submodule <a name="`bcmpricingcalculatorBillEstimate` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorBillEstimate <a name="BcmpricingcalculatorBillEstimate" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate awscc_bcmpricingcalculator_bill_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate(scope: Construct, id: string, config: BcmpricingcalculatorBillEstimateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig">BcmpricingcalculatorBillEstimateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig">BcmpricingcalculatorBillEstimateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetBillScenarioId">resetBillScenarioId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags"></a>

```typescript
public putTags(value: IResolvable | BcmpricingcalculatorBillEstimateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

---

##### `resetBillScenarioId` <a name="resetBillScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetBillScenarioId"></a>

```typescript
public resetBillScenarioId(): void
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmpricingcalculatorBillEstimate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmpricingcalculatorBillEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorBillEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billEstimateId">billEstimateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billInterval">billInterval</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference">BcmpricingcalculatorBillEstimateBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn">costCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate">costCategoryGroupSharingPreferenceEffectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.groupSharingPreference">groupSharingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList">BcmpricingcalculatorBillEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioIdInput">billScenarioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioId">billScenarioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `billEstimateId`<sup>Required</sup> <a name="billEstimateId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billEstimateId"></a>

```typescript
public readonly billEstimateId: string;
```

- *Type:* string

---

##### `billInterval`<sup>Required</sup> <a name="billInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billInterval"></a>

```typescript
public readonly billInterval: BcmpricingcalculatorBillEstimateBillIntervalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference">BcmpricingcalculatorBillEstimateBillIntervalOutputReference</a>

---

##### `costCategoryGroupSharingPreferenceArn`<sup>Required</sup> <a name="costCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn"></a>

```typescript
public readonly costCategoryGroupSharingPreferenceArn: string;
```

- *Type:* string

---

##### `costCategoryGroupSharingPreferenceEffectiveDate`<sup>Required</sup> <a name="costCategoryGroupSharingPreferenceEffectiveDate" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate"></a>

```typescript
public readonly costCategoryGroupSharingPreferenceEffectiveDate: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `groupSharingPreference`<sup>Required</sup> <a name="groupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.groupSharingPreference"></a>

```typescript
public readonly groupSharingPreference: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tags"></a>

```typescript
public readonly tags: BcmpricingcalculatorBillEstimateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList">BcmpricingcalculatorBillEstimateTagsList</a>

---

##### `billScenarioIdInput`<sup>Optional</sup> <a name="billScenarioIdInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioIdInput"></a>

```typescript
public readonly billScenarioIdInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BcmpricingcalculatorBillEstimateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

---

##### `billScenarioId`<sup>Required</sup> <a name="billScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioId"></a>

```typescript
public readonly billScenarioId: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorBillEstimateBillInterval <a name="BcmpricingcalculatorBillEstimateBillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

const bcmpricingcalculatorBillEstimateBillInterval: bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval = { ... }
```


### BcmpricingcalculatorBillEstimateConfig <a name="BcmpricingcalculatorBillEstimateConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

const bcmpricingcalculatorBillEstimateConfig: bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.name">name</a></code> | <code>string</code> | The name of the bill estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.billScenarioId">billScenarioId</a></code> | <code>string</code> | The unique identifier of the bill scenario this estimate is based on. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | The timestamp when the bill estimate expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bill estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#name BcmpricingcalculatorBillEstimate#name}

---

##### `billScenarioId`<sup>Optional</sup> <a name="billScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.billScenarioId"></a>

```typescript
public readonly billScenarioId: string;
```

- *Type:* string

The unique identifier of the bill scenario this estimate is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#bill_scenario_id BcmpricingcalculatorBillEstimate#bill_scenario_id}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

The timestamp when the bill estimate expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#expires_at BcmpricingcalculatorBillEstimate#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BcmpricingcalculatorBillEstimateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#tags BcmpricingcalculatorBillEstimate#tags}

---

### BcmpricingcalculatorBillEstimateTags <a name="BcmpricingcalculatorBillEstimateTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

const bcmpricingcalculatorBillEstimateTags: bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#key BcmpricingcalculatorBillEstimate#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#value BcmpricingcalculatorBillEstimate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#key BcmpricingcalculatorBillEstimate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bcmpricingcalculator_bill_estimate#value BcmpricingcalculatorBillEstimate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorBillEstimateBillIntervalOutputReference <a name="BcmpricingcalculatorBillEstimateBillIntervalOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval">BcmpricingcalculatorBillEstimateBillInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BcmpricingcalculatorBillEstimateBillInterval;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval">BcmpricingcalculatorBillEstimateBillInterval</a>

---


### BcmpricingcalculatorBillEstimateTagsList <a name="BcmpricingcalculatorBillEstimateTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get"></a>

```typescript
public get(index: number): BcmpricingcalculatorBillEstimateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmpricingcalculatorBillEstimateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

---


### BcmpricingcalculatorBillEstimateTagsOutputReference <a name="BcmpricingcalculatorBillEstimateTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillEstimate } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmpricingcalculatorBillEstimateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>

---



