# `billingconductorBillingGroup` Submodule <a name="`billingconductorBillingGroup` Submodule" id="@cdktn/provider-awscc.billingconductorBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorBillingGroup <a name="BillingconductorBillingGroup" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group awscc_billingconductor_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

new billingconductorBillingGroup.BillingconductorBillingGroup(scope: Construct, id: string, config: BillingconductorBillingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig">BillingconductorBillingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig">BillingconductorBillingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping">putAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference">putComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId">resetPrimaryAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountGrouping` <a name="putAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping"></a>

```typescript
public putAccountGrouping(value: BillingconductorBillingGroupAccountGrouping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `putComputationPreference` <a name="putComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference"></a>

```typescript
public putComputationPreference(value: BillingconductorBillingGroupComputationPreference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | BillingconductorBillingGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPrimaryAccountId` <a name="resetPrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId"></a>

```typescript
public resetPrimaryAccountId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingconductorBillingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingconductorBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping">accountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference">computationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput">accountGroupingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput">computationPreferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput">primaryAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId">primaryAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountGrouping`<sup>Required</sup> <a name="accountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping"></a>

```typescript
public readonly accountGrouping: BillingconductorBillingGroupAccountGroupingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `computationPreference`<sup>Required</sup> <a name="computationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference"></a>

```typescript
public readonly computationPreference: BillingconductorBillingGroupComputationPreferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags"></a>

```typescript
public readonly tags: BillingconductorBillingGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a>

---

##### `accountGroupingInput`<sup>Optional</sup> <a name="accountGroupingInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput"></a>

```typescript
public readonly accountGroupingInput: IResolvable | BillingconductorBillingGroupAccountGrouping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `computationPreferenceInput`<sup>Optional</sup> <a name="computationPreferenceInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput"></a>

```typescript
public readonly computationPreferenceInput: IResolvable | BillingconductorBillingGroupComputationPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryAccountIdInput`<sup>Optional</sup> <a name="primaryAccountIdInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput"></a>

```typescript
public readonly primaryAccountIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BillingconductorBillingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryAccountId`<sup>Required</sup> <a name="primaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId"></a>

```typescript
public readonly primaryAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorBillingGroupAccountGrouping <a name="BillingconductorBillingGroupAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

const billingconductorBillingGroupAccountGrouping: billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate">autoAssociate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds">linkedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn">responsibilityTransferArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}. |

---

##### `autoAssociate`<sup>Optional</sup> <a name="autoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate"></a>

```typescript
public readonly autoAssociate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}.

---

##### `linkedAccountIds`<sup>Optional</sup> <a name="linkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds"></a>

```typescript
public readonly linkedAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}.

---

##### `responsibilityTransferArn`<sup>Optional</sup> <a name="responsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn"></a>

```typescript
public readonly responsibilityTransferArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}.

---

### BillingconductorBillingGroupComputationPreference <a name="BillingconductorBillingGroupComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

const billingconductorBillingGroupComputationPreference: billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn">pricingPlanArn</a></code> | <code>string</code> | ARN of the attached pricing plan. |

---

##### `pricingPlanArn`<sup>Required</sup> <a name="pricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn"></a>

```typescript
public readonly pricingPlanArn: string;
```

- *Type:* string

ARN of the attached pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#pricing_plan_arn BillingconductorBillingGroup#pricing_plan_arn}

---

### BillingconductorBillingGroupConfig <a name="BillingconductorBillingGroupConfig" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

const billingconductorBillingGroupConfig: billingconductorBillingGroup.BillingconductorBillingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping">accountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference">computationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId">primaryAccountId</a></code> | <code>string</code> | This account will act as a virtual payer account of the billing group. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountGrouping`<sup>Required</sup> <a name="accountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping"></a>

```typescript
public readonly accountGrouping: BillingconductorBillingGroupAccountGrouping;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}.

---

##### `computationPreference`<sup>Required</sup> <a name="computationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference"></a>

```typescript
public readonly computationPreference: BillingconductorBillingGroupComputationPreference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}.

---

##### `primaryAccountId`<sup>Optional</sup> <a name="primaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId"></a>

```typescript
public readonly primaryAccountId: string;
```

- *Type:* string

This account will act as a virtual payer account of the billing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#primary_account_id BillingconductorBillingGroup#primary_account_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BillingconductorBillingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}.

---

### BillingconductorBillingGroupTags <a name="BillingconductorBillingGroupTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

const billingconductorBillingGroupTags: billingconductorBillingGroup.BillingconductorBillingGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorBillingGroupAccountGroupingOutputReference <a name="BillingconductorBillingGroupAccountGroupingOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

new billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate">resetAutoAssociate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds">resetLinkedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn">resetResponsibilityTransferArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoAssociate` <a name="resetAutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate"></a>

```typescript
public resetAutoAssociate(): void
```

##### `resetLinkedAccountIds` <a name="resetLinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds"></a>

```typescript
public resetLinkedAccountIds(): void
```

##### `resetResponsibilityTransferArn` <a name="resetResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn"></a>

```typescript
public resetResponsibilityTransferArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput">autoAssociateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput">linkedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput">responsibilityTransferArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate">autoAssociate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds">linkedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn">responsibilityTransferArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoAssociateInput`<sup>Optional</sup> <a name="autoAssociateInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput"></a>

```typescript
public readonly autoAssociateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `linkedAccountIdsInput`<sup>Optional</sup> <a name="linkedAccountIdsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput"></a>

```typescript
public readonly linkedAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `responsibilityTransferArnInput`<sup>Optional</sup> <a name="responsibilityTransferArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput"></a>

```typescript
public readonly responsibilityTransferArnInput: string;
```

- *Type:* string

---

##### `autoAssociate`<sup>Required</sup> <a name="autoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate"></a>

```typescript
public readonly autoAssociate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `linkedAccountIds`<sup>Required</sup> <a name="linkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds"></a>

```typescript
public readonly linkedAccountIds: string[];
```

- *Type:* string[]

---

##### `responsibilityTransferArn`<sup>Required</sup> <a name="responsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn"></a>

```typescript
public readonly responsibilityTransferArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorBillingGroupAccountGrouping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---


### BillingconductorBillingGroupComputationPreferenceOutputReference <a name="BillingconductorBillingGroupComputationPreferenceOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

new billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput">pricingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn">pricingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pricingPlanArnInput`<sup>Optional</sup> <a name="pricingPlanArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput"></a>

```typescript
public readonly pricingPlanArnInput: string;
```

- *Type:* string

---

##### `pricingPlanArn`<sup>Required</sup> <a name="pricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn"></a>

```typescript
public readonly pricingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorBillingGroupComputationPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---


### BillingconductorBillingGroupTagsList <a name="BillingconductorBillingGroupTagsList" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

new billingconductorBillingGroup.BillingconductorBillingGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get"></a>

```typescript
public get(index: number): BillingconductorBillingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorBillingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

---


### BillingconductorBillingGroupTagsOutputReference <a name="BillingconductorBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer"></a>

```typescript
import { billingconductorBillingGroup } from '@cdktn/provider-awscc'

new billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorBillingGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>

---



