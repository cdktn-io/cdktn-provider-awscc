# `bcmpricingcalculatorBillScenario` Submodule <a name="`bcmpricingcalculatorBillScenario` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorBillScenario <a name="BcmpricingcalculatorBillScenario" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario awscc_bcmpricingcalculator_bill_scenario}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario(scope: Construct, id: string, config?: BcmpricingcalculatorBillScenarioConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig">BcmpricingcalculatorBillScenarioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig">BcmpricingcalculatorBillScenarioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn">resetCostCategoryGroupSharingPreferenceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference">resetGroupSharingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags"></a>

```typescript
public putTags(value: IResolvable | BcmpricingcalculatorBillScenarioTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

---

##### `resetCostCategoryGroupSharingPreferenceArn` <a name="resetCostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn"></a>

```typescript
public resetCostCategoryGroupSharingPreferenceArn(): void
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetGroupSharingPreference` <a name="resetGroupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference"></a>

```typescript
public resetGroupSharingPreference(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmpricingcalculatorBillScenario to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmpricingcalculatorBillScenario that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorBillScenario to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval">billInterval</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId">billScenarioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage">failureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput">costCategoryGroupSharingPreferenceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput">groupSharingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn">costCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference">groupSharingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `billInterval`<sup>Required</sup> <a name="billInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval"></a>

```typescript
public readonly billInterval: BcmpricingcalculatorBillScenarioBillIntervalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a>

---

##### `billScenarioId`<sup>Required</sup> <a name="billScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId"></a>

```typescript
public readonly billScenarioId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `failureMessage`<sup>Required</sup> <a name="failureMessage" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage"></a>

```typescript
public readonly failureMessage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags"></a>

```typescript
public readonly tags: BcmpricingcalculatorBillScenarioTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a>

---

##### `costCategoryGroupSharingPreferenceArnInput`<sup>Optional</sup> <a name="costCategoryGroupSharingPreferenceArnInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput"></a>

```typescript
public readonly costCategoryGroupSharingPreferenceArnInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `groupSharingPreferenceInput`<sup>Optional</sup> <a name="groupSharingPreferenceInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput"></a>

```typescript
public readonly groupSharingPreferenceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BcmpricingcalculatorBillScenarioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

---

##### `costCategoryGroupSharingPreferenceArn`<sup>Required</sup> <a name="costCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn"></a>

```typescript
public readonly costCategoryGroupSharingPreferenceArn: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `groupSharingPreference`<sup>Required</sup> <a name="groupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference"></a>

```typescript
public readonly groupSharingPreference: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorBillScenarioBillInterval <a name="BcmpricingcalculatorBillScenarioBillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

const bcmpricingcalculatorBillScenarioBillInterval: bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval = { ... }
```


### BcmpricingcalculatorBillScenarioConfig <a name="BcmpricingcalculatorBillScenarioConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

const bcmpricingcalculatorBillScenarioConfig: bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn">costCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | The ARN of the cost category group sharing preference. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | The timestamp when the bill scenario expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference">groupSharingPreference</a></code> | <code>string</code> | The group sharing preference for the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name">name</a></code> | <code>string</code> | The name of the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `costCategoryGroupSharingPreferenceArn`<sup>Optional</sup> <a name="costCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn"></a>

```typescript
public readonly costCategoryGroupSharingPreferenceArn: string;
```

- *Type:* string

The ARN of the cost category group sharing preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#cost_category_group_sharing_preference_arn BcmpricingcalculatorBillScenario#cost_category_group_sharing_preference_arn}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

The timestamp when the bill scenario expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#expires_at BcmpricingcalculatorBillScenario#expires_at}

---

##### `groupSharingPreference`<sup>Optional</sup> <a name="groupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference"></a>

```typescript
public readonly groupSharingPreference: string;
```

- *Type:* string

The group sharing preference for the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#group_sharing_preference BcmpricingcalculatorBillScenario#group_sharing_preference}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#name BcmpricingcalculatorBillScenario#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BcmpricingcalculatorBillScenarioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#tags BcmpricingcalculatorBillScenario#tags}

---

### BcmpricingcalculatorBillScenarioTags <a name="BcmpricingcalculatorBillScenarioTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

const bcmpricingcalculatorBillScenarioTags: bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorBillScenarioBillIntervalOutputReference <a name="BcmpricingcalculatorBillScenarioBillIntervalOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BcmpricingcalculatorBillScenarioBillInterval;
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a>

---


### BcmpricingcalculatorBillScenarioTagsList <a name="BcmpricingcalculatorBillScenarioTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get"></a>

```typescript
public get(index: number): BcmpricingcalculatorBillScenarioTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmpricingcalculatorBillScenarioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

---


### BcmpricingcalculatorBillScenarioTagsOutputReference <a name="BcmpricingcalculatorBillScenarioTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer"></a>

```typescript
import { bcmpricingcalculatorBillScenario } from '@cdktn/provider-awscc'

new bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BcmpricingcalculatorBillScenarioTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>

---



