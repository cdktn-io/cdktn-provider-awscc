# `bcmpricingcalculatorWorkloadEstimate` Submodule <a name="`bcmpricingcalculatorWorkloadEstimate` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorWorkloadEstimate <a name="BcmpricingcalculatorWorkloadEstimate" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate awscc_bcmpricingcalculator_workload_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

new bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate(scope: Construct, id: string, config: BcmpricingcalculatorWorkloadEstimateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig">BcmpricingcalculatorWorkloadEstimateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig">BcmpricingcalculatorWorkloadEstimateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetRateType">resetRateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags"></a>

```typescript
public putTags(value: IResolvable | BcmpricingcalculatorWorkloadEstimateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

---

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetRateType` <a name="resetRateType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetRateType"></a>

```typescript
public resetRateType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmpricingcalculatorWorkloadEstimate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmpricingcalculatorWorkloadEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorWorkloadEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.costCurrency">costCurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.failureMessage">failureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTimestamp">rateTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList">BcmpricingcalculatorWorkloadEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.totalCost">totalCost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId">workloadEstimateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTypeInput">rateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateType">rateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `costCurrency`<sup>Required</sup> <a name="costCurrency" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.costCurrency"></a>

```typescript
public readonly costCurrency: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `failureMessage`<sup>Required</sup> <a name="failureMessage" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.failureMessage"></a>

```typescript
public readonly failureMessage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rateTimestamp`<sup>Required</sup> <a name="rateTimestamp" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTimestamp"></a>

```typescript
public readonly rateTimestamp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tags"></a>

```typescript
public readonly tags: BcmpricingcalculatorWorkloadEstimateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList">BcmpricingcalculatorWorkloadEstimateTagsList</a>

---

##### `totalCost`<sup>Required</sup> <a name="totalCost" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.totalCost"></a>

```typescript
public readonly totalCost: number;
```

- *Type:* number

---

##### `workloadEstimateId`<sup>Required</sup> <a name="workloadEstimateId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId"></a>

```typescript
public readonly workloadEstimateId: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rateTypeInput`<sup>Optional</sup> <a name="rateTypeInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTypeInput"></a>

```typescript
public readonly rateTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BcmpricingcalculatorWorkloadEstimateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rateType`<sup>Required</sup> <a name="rateType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateType"></a>

```typescript
public readonly rateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorWorkloadEstimateConfig <a name="BcmpricingcalculatorWorkloadEstimateConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.Initializer"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

const bcmpricingcalculatorWorkloadEstimateConfig: bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.name">name</a></code> | <code>string</code> | The name of the workload estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | The timestamp when the workload estimate will expire. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.rateType">rateType</a></code> | <code>string</code> | The type of pricing rates used for the estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workload estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#name BcmpricingcalculatorWorkloadEstimate#name}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

The timestamp when the workload estimate will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#expires_at BcmpricingcalculatorWorkloadEstimate#expires_at}

---

##### `rateType`<sup>Optional</sup> <a name="rateType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.rateType"></a>

```typescript
public readonly rateType: string;
```

- *Type:* string

The type of pricing rates used for the estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#rate_type BcmpricingcalculatorWorkloadEstimate#rate_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BcmpricingcalculatorWorkloadEstimateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#tags BcmpricingcalculatorWorkloadEstimate#tags}

---

### BcmpricingcalculatorWorkloadEstimateTags <a name="BcmpricingcalculatorWorkloadEstimateTags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.Initializer"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

const bcmpricingcalculatorWorkloadEstimateTags: bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#key BcmpricingcalculatorWorkloadEstimate#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#value BcmpricingcalculatorWorkloadEstimate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#key BcmpricingcalculatorWorkloadEstimate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#value BcmpricingcalculatorWorkloadEstimate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorWorkloadEstimateTagsList <a name="BcmpricingcalculatorWorkloadEstimateTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

new bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get"></a>

```typescript
public get(index: number): BcmpricingcalculatorWorkloadEstimateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmpricingcalculatorWorkloadEstimateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

---


### BcmpricingcalculatorWorkloadEstimateTagsOutputReference <a name="BcmpricingcalculatorWorkloadEstimateTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer"></a>

```typescript
import { bcmpricingcalculatorWorkloadEstimate } from '@cdktn/provider-awscc'

new bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmpricingcalculatorWorkloadEstimateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>

---



