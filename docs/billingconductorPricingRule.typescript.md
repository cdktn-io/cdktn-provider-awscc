# `billingconductorPricingRule` Submodule <a name="`billingconductorPricingRule` Submodule" id="@cdktn/provider-awscc.billingconductorPricingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorPricingRule <a name="BillingconductorPricingRule" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

new billingconductorPricingRule.BillingconductorPricingRule(scope: Construct, id: string, config: BillingconductorPricingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig">BillingconductorPricingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig">BillingconductorPricingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering">putTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity">resetBillingEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage">resetModifierPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering">resetTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType">resetUsageType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags"></a>

```typescript
public putTags(value: IResolvable | BillingconductorPricingRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

---

##### `putTiering` <a name="putTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering"></a>

```typescript
public putTiering(value: BillingconductorPricingRuleTiering): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `resetBillingEntity` <a name="resetBillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity"></a>

```typescript
public resetBillingEntity(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetModifierPercentage` <a name="resetModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage"></a>

```typescript
public resetModifierPercentage(): void
```

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService"></a>

```typescript
public resetService(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTiering` <a name="resetTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering"></a>

```typescript
public resetTiering(): void
```

##### `resetUsageType` <a name="resetUsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType"></a>

```typescript
public resetUsageType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

billingconductorPricingRule.BillingconductorPricingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingconductorPricingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingconductorPricingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorPricingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount">associatedPricingPlanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput">billingEntityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput">modifierPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput">tieringInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput">usageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity">billingEntity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage">modifierPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType">usageType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associatedPricingPlanCount`<sup>Required</sup> <a name="associatedPricingPlanCount" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount"></a>

```typescript
public readonly associatedPricingPlanCount: number;
```

- *Type:* number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags"></a>

```typescript
public readonly tags: BillingconductorPricingRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a>

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering"></a>

```typescript
public readonly tiering: BillingconductorPricingRuleTieringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a>

---

##### `billingEntityInput`<sup>Optional</sup> <a name="billingEntityInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput"></a>

```typescript
public readonly billingEntityInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `modifierPercentageInput`<sup>Optional</sup> <a name="modifierPercentageInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput"></a>

```typescript
public readonly modifierPercentageInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BillingconductorPricingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

---

##### `tieringInput`<sup>Optional</sup> <a name="tieringInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput"></a>

```typescript
public readonly tieringInput: IResolvable | BillingconductorPricingRuleTiering;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usageTypeInput`<sup>Optional</sup> <a name="usageTypeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput"></a>

```typescript
public readonly usageTypeInput: string;
```

- *Type:* string

---

##### `billingEntity`<sup>Required</sup> <a name="billingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity"></a>

```typescript
public readonly billingEntity: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `modifierPercentage`<sup>Required</sup> <a name="modifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage"></a>

```typescript
public readonly modifierPercentage: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorPricingRuleConfig <a name="BillingconductorPricingRuleConfig" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

const billingconductorPricingRuleConfig: billingconductorPricingRule.BillingconductorPricingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name">name</a></code> | <code>string</code> | Pricing rule name. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope">scope</a></code> | <code>string</code> | A term used to categorize the granularity of a Pricing Rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type">type</a></code> | <code>string</code> | One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity">billingEntity</a></code> | <code>string</code> | The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description">description</a></code> | <code>string</code> | Pricing rule description. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage">modifierPercentage</a></code> | <code>number</code> | Pricing rule modifier percentage. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation">operation</a></code> | <code>string</code> | The Operation which a SKU pricing rule is modifying. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service">service</a></code> | <code>string</code> | The service which a pricing rule is applied on. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | The set of tiering configurations for the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType">usageType</a></code> | <code>string</code> | The UsageType which a SKU pricing rule is modifying. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Pricing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#name BillingconductorPricingRule#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

A term used to categorize the granularity of a Pricing Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#scope BillingconductorPricingRule#scope}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#type BillingconductorPricingRule#type}

---

##### `billingEntity`<sup>Optional</sup> <a name="billingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity"></a>

```typescript
public readonly billingEntity: string;
```

- *Type:* string

The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces.

Supported billing entities are AWS, AWS Marketplace, and AISPL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#billing_entity BillingconductorPricingRule#billing_entity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Pricing rule description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#description BillingconductorPricingRule#description}

---

##### `modifierPercentage`<sup>Optional</sup> <a name="modifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage"></a>

```typescript
public readonly modifierPercentage: number;
```

- *Type:* number

Pricing rule modifier percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#modifier_percentage BillingconductorPricingRule#modifier_percentage}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The Operation which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#operation BillingconductorPricingRule#operation}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The service which a pricing rule is applied on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#service BillingconductorPricingRule#service}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BillingconductorPricingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}.

---

##### `tiering`<sup>Optional</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering"></a>

```typescript
public readonly tiering: BillingconductorPricingRuleTiering;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

The set of tiering configurations for the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#tiering BillingconductorPricingRule#tiering}

---

##### `usageType`<sup>Optional</sup> <a name="usageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

The UsageType which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#usage_type BillingconductorPricingRule#usage_type}

---

### BillingconductorPricingRuleTags <a name="BillingconductorPricingRuleTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

const billingconductorPricingRuleTags: billingconductorPricingRule.BillingconductorPricingRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}.

---

### BillingconductorPricingRuleTiering <a name="BillingconductorPricingRuleTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

const billingconductorPricingRuleTiering: billingconductorPricingRule.BillingconductorPricingRuleTiering = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier">freeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | The possible customizable free tier configurations. |

---

##### `freeTier`<sup>Optional</sup> <a name="freeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier"></a>

```typescript
public readonly freeTier: BillingconductorPricingRuleTieringFreeTier;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

The possible customizable free tier configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#free_tier BillingconductorPricingRule#free_tier}

---

### BillingconductorPricingRuleTieringFreeTier <a name="BillingconductorPricingRuleTieringFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

const billingconductorPricingRuleTieringFreeTier: billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated">activated</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}. |

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorPricingRuleTagsList <a name="BillingconductorPricingRuleTagsList" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

new billingconductorPricingRule.BillingconductorPricingRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get"></a>

```typescript
public get(index: number): BillingconductorPricingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorPricingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

---


### BillingconductorPricingRuleTagsOutputReference <a name="BillingconductorPricingRuleTagsOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

new billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorPricingRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>

---


### BillingconductorPricingRuleTieringFreeTierOutputReference <a name="BillingconductorPricingRuleTieringFreeTierOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

new billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated">resetActivated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActivated` <a name="resetActivated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated"></a>

```typescript
public resetActivated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput">activatedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated">activated</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput"></a>

```typescript
public readonly activatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorPricingRuleTieringFreeTier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---


### BillingconductorPricingRuleTieringOutputReference <a name="BillingconductorPricingRuleTieringOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer"></a>

```typescript
import { billingconductorPricingRule } from '@cdktn/provider-awscc'

new billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier">putFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier">resetFreeTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFreeTier` <a name="putFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier"></a>

```typescript
public putFreeTier(value: BillingconductorPricingRuleTieringFreeTier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `resetFreeTier` <a name="resetFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier"></a>

```typescript
public resetFreeTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier">freeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput">freeTierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `freeTier`<sup>Required</sup> <a name="freeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier"></a>

```typescript
public readonly freeTier: BillingconductorPricingRuleTieringFreeTierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a>

---

##### `freeTierInput`<sup>Optional</sup> <a name="freeTierInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput"></a>

```typescript
public readonly freeTierInput: IResolvable | BillingconductorPricingRuleTieringFreeTier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorPricingRuleTiering;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---



