# `billingconductorCustomLineItem` Submodule <a name="`billingconductorCustomLineItem` Submodule" id="@cdktn/provider-awscc.billingconductorCustomLineItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorCustomLineItem <a name="BillingconductorCustomLineItem" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItem(scope: Construct, id: string, config: BillingconductorCustomLineItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig">BillingconductorCustomLineItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig">BillingconductorCustomLineItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange">putBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails">putCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails">putPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange">resetBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule">resetComputationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails">resetCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails">resetPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBillingPeriodRange` <a name="putBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange"></a>

```typescript
public putBillingPeriodRange(value: BillingconductorCustomLineItemBillingPeriodRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---

##### `putCustomLineItemChargeDetails` <a name="putCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails"></a>

```typescript
public putCustomLineItemChargeDetails(value: BillingconductorCustomLineItemCustomLineItemChargeDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---

##### `putPresentationDetails` <a name="putPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails"></a>

```typescript
public putPresentationDetails(value: BillingconductorCustomLineItemPresentationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags"></a>

```typescript
public putTags(value: IResolvable | BillingconductorCustomLineItemTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBillingPeriodRange` <a name="resetBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange"></a>

```typescript
public resetBillingPeriodRange(): void
```

##### `resetComputationRule` <a name="resetComputationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule"></a>

```typescript
public resetComputationRule(): void
```

##### `resetCustomLineItemChargeDetails` <a name="resetCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails"></a>

```typescript
public resetCustomLineItemChargeDetails(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPresentationDetails` <a name="resetPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails"></a>

```typescript
public resetPresentationDetails(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingconductorCustomLineItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingconductorCustomLineItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorCustomLineItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize">associationSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange">billingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails">customLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails">presentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode">productCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput">billingGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput">billingPeriodRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput">computationRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput">customLineItemChargeDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput">presentationDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn">billingGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule">computationRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationSize`<sup>Required</sup> <a name="associationSize" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize"></a>

```typescript
public readonly associationSize: number;
```

- *Type:* number

---

##### `billingPeriodRange`<sup>Required</sup> <a name="billingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange"></a>

```typescript
public readonly billingPeriodRange: BillingconductorCustomLineItemBillingPeriodRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `customLineItemChargeDetails`<sup>Required</sup> <a name="customLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails"></a>

```typescript
public readonly customLineItemChargeDetails: BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `presentationDetails`<sup>Required</sup> <a name="presentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails"></a>

```typescript
public readonly presentationDetails: BillingconductorCustomLineItemPresentationDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a>

---

##### `productCode`<sup>Required</sup> <a name="productCode" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode"></a>

```typescript
public readonly productCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags"></a>

```typescript
public readonly tags: BillingconductorCustomLineItemTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `billingGroupArnInput`<sup>Optional</sup> <a name="billingGroupArnInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput"></a>

```typescript
public readonly billingGroupArnInput: string;
```

- *Type:* string

---

##### `billingPeriodRangeInput`<sup>Optional</sup> <a name="billingPeriodRangeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput"></a>

```typescript
public readonly billingPeriodRangeInput: IResolvable | BillingconductorCustomLineItemBillingPeriodRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---

##### `computationRuleInput`<sup>Optional</sup> <a name="computationRuleInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput"></a>

```typescript
public readonly computationRuleInput: string;
```

- *Type:* string

---

##### `customLineItemChargeDetailsInput`<sup>Optional</sup> <a name="customLineItemChargeDetailsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput"></a>

```typescript
public readonly customLineItemChargeDetailsInput: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `presentationDetailsInput`<sup>Optional</sup> <a name="presentationDetailsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput"></a>

```typescript
public readonly presentationDetailsInput: IResolvable | BillingconductorCustomLineItemPresentationDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BillingconductorCustomLineItemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `billingGroupArn`<sup>Required</sup> <a name="billingGroupArn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn"></a>

```typescript
public readonly billingGroupArn: string;
```

- *Type:* string

---

##### `computationRule`<sup>Required</sup> <a name="computationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule"></a>

```typescript
public readonly computationRule: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorCustomLineItemBillingPeriodRange <a name="BillingconductorCustomLineItemBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemBillingPeriodRange: billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod">exclusiveEndBillingPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod">inclusiveStartBillingPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}. |

---

##### `exclusiveEndBillingPeriod`<sup>Optional</sup> <a name="exclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod"></a>

```typescript
public readonly exclusiveEndBillingPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}.

---

##### `inclusiveStartBillingPeriod`<sup>Optional</sup> <a name="inclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod"></a>

```typescript
public readonly inclusiveStartBillingPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}.

---

### BillingconductorCustomLineItemConfig <a name="BillingconductorCustomLineItemConfig" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemConfig: billingconductorCustomLineItem.BillingconductorCustomLineItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn">billingGroupArn</a></code> | <code>string</code> | Billing Group ARN. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId">accountId</a></code> | <code>string</code> | The account which this custom line item will be charged to. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange">billingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule">computationRule</a></code> | <code>string</code> | The display settings of the Custom Line Item. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails">customLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails">presentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `billingGroupArn`<sup>Required</sup> <a name="billingGroupArn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn"></a>

```typescript
public readonly billingGroupArn: string;
```

- *Type:* string

Billing Group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#billing_group_arn BillingconductorCustomLineItem#billing_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account which this custom line item will be charged to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#account_id BillingconductorCustomLineItem#account_id}

---

##### `billingPeriodRange`<sup>Optional</sup> <a name="billingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange"></a>

```typescript
public readonly billingPeriodRange: BillingconductorCustomLineItemBillingPeriodRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}.

---

##### `computationRule`<sup>Optional</sup> <a name="computationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule"></a>

```typescript
public readonly computationRule: string;
```

- *Type:* string

The display settings of the Custom Line Item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#computation_rule BillingconductorCustomLineItem#computation_rule}

---

##### `customLineItemChargeDetails`<sup>Optional</sup> <a name="customLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails"></a>

```typescript
public readonly customLineItemChargeDetails: BillingconductorCustomLineItemCustomLineItemChargeDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}.

---

##### `presentationDetails`<sup>Optional</sup> <a name="presentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails"></a>

```typescript
public readonly presentationDetails: BillingconductorCustomLineItemPresentationDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BillingconductorCustomLineItemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetails <a name="BillingconductorCustomLineItemCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemCustomLineItemChargeDetails: billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters">lineItemFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage">percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}. |

---

##### `flat`<sup>Optional</sup> <a name="flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat"></a>

```typescript
public readonly flat: BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}.

---

##### `lineItemFilters`<sup>Optional</sup> <a name="lineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters"></a>

```typescript
public readonly lineItemFilters: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage"></a>

```typescript
public readonly percentage: BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemCustomLineItemChargeDetailsFlat: billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue">chargeValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}. |

---

##### `chargeValue`<sup>Optional</sup> <a name="chargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue"></a>

```typescript
public readonly chargeValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters: billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues">attributeValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption">matchOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}.

---

##### `attributeValues`<sup>Optional</sup> <a name="attributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues"></a>

```typescript
public readonly attributeValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}.

---

##### `matchOption`<sup>Optional</sup> <a name="matchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption"></a>

```typescript
public readonly matchOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemCustomLineItemChargeDetailsPercentage: billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources">childAssociatedResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue">percentageValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}. |

---

##### `childAssociatedResources`<sup>Optional</sup> <a name="childAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources"></a>

```typescript
public readonly childAssociatedResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}.

---

##### `percentageValue`<sup>Optional</sup> <a name="percentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue"></a>

```typescript
public readonly percentageValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}.

---

### BillingconductorCustomLineItemPresentationDetails <a name="BillingconductorCustomLineItemPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemPresentationDetails: billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}.

---

### BillingconductorCustomLineItemTags <a name="BillingconductorCustomLineItemTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

const billingconductorCustomLineItemTags: billingconductorCustomLineItem.BillingconductorCustomLineItemTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorCustomLineItemBillingPeriodRangeOutputReference <a name="BillingconductorCustomLineItemBillingPeriodRangeOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod">resetExclusiveEndBillingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod">resetInclusiveStartBillingPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusiveEndBillingPeriod` <a name="resetExclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod"></a>

```typescript
public resetExclusiveEndBillingPeriod(): void
```

##### `resetInclusiveStartBillingPeriod` <a name="resetInclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod"></a>

```typescript
public resetInclusiveStartBillingPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput">exclusiveEndBillingPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput">inclusiveStartBillingPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod">exclusiveEndBillingPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod">inclusiveStartBillingPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusiveEndBillingPeriodInput`<sup>Optional</sup> <a name="exclusiveEndBillingPeriodInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput"></a>

```typescript
public readonly exclusiveEndBillingPeriodInput: string;
```

- *Type:* string

---

##### `inclusiveStartBillingPeriodInput`<sup>Optional</sup> <a name="inclusiveStartBillingPeriodInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput"></a>

```typescript
public readonly inclusiveStartBillingPeriodInput: string;
```

- *Type:* string

---

##### `exclusiveEndBillingPeriod`<sup>Required</sup> <a name="exclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod"></a>

```typescript
public readonly exclusiveEndBillingPeriod: string;
```

- *Type:* string

---

##### `inclusiveStartBillingPeriod`<sup>Required</sup> <a name="inclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod"></a>

```typescript
public readonly inclusiveStartBillingPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemBillingPeriodRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue">resetChargeValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChargeValue` <a name="resetChargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue"></a>

```typescript
public resetChargeValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput">chargeValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue">chargeValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chargeValueInput`<sup>Optional</sup> <a name="chargeValueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput"></a>

```typescript
public readonly chargeValueInput: number;
```

- *Type:* number

---

##### `chargeValue`<sup>Required</sup> <a name="chargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue"></a>

```typescript
public readonly chargeValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get"></a>

```typescript
public get(index: number): BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>[]

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues">resetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption">resetMatchOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetAttributeValues` <a name="resetAttributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues"></a>

```typescript
public resetAttributeValues(): void
```

##### `resetMatchOption` <a name="resetMatchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption"></a>

```typescript
public resetMatchOption(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput">attributeValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput">matchOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues">attributeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption">matchOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `attributeValuesInput`<sup>Optional</sup> <a name="attributeValuesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput"></a>

```typescript
public readonly attributeValuesInput: string[];
```

- *Type:* string[]

---

##### `matchOptionInput`<sup>Optional</sup> <a name="matchOptionInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput"></a>

```typescript
public readonly matchOptionInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues"></a>

```typescript
public readonly attributeValues: string[];
```

- *Type:* string[]

---

##### `matchOption`<sup>Required</sup> <a name="matchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption"></a>

```typescript
public readonly matchOption: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat">putFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters">putLineItemFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage">putPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat">resetFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters">resetLineItemFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlat` <a name="putFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat"></a>

```typescript
public putFlat(value: BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---

##### `putLineItemFilters` <a name="putLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters"></a>

```typescript
public putLineItemFilters(value: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>[]

---

##### `putPercentage` <a name="putPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage"></a>

```typescript
public putPercentage(value: BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---

##### `resetFlat` <a name="resetFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat"></a>

```typescript
public resetFlat(): void
```

##### `resetLineItemFilters` <a name="resetLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters"></a>

```typescript
public resetLineItemFilters(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters">lineItemFilters</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage">percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput">flatInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput">lineItemFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput">percentageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flat`<sup>Required</sup> <a name="flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat"></a>

```typescript
public readonly flat: BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a>

---

##### `lineItemFilters`<sup>Required</sup> <a name="lineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters"></a>

```typescript
public readonly lineItemFilters: BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a>

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage"></a>

```typescript
public readonly percentage: BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a>

---

##### `flatInput`<sup>Optional</sup> <a name="flatInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput"></a>

```typescript
public readonly flatInput: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---

##### `lineItemFiltersInput`<sup>Optional</sup> <a name="lineItemFiltersInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput"></a>

```typescript
public readonly lineItemFiltersInput: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>[]

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources">resetChildAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue">resetPercentageValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChildAssociatedResources` <a name="resetChildAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources"></a>

```typescript
public resetChildAssociatedResources(): void
```

##### `resetPercentageValue` <a name="resetPercentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue"></a>

```typescript
public resetPercentageValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput">childAssociatedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput">percentageValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources">childAssociatedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue">percentageValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childAssociatedResourcesInput`<sup>Optional</sup> <a name="childAssociatedResourcesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput"></a>

```typescript
public readonly childAssociatedResourcesInput: string[];
```

- *Type:* string[]

---

##### `percentageValueInput`<sup>Optional</sup> <a name="percentageValueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput"></a>

```typescript
public readonly percentageValueInput: number;
```

- *Type:* number

---

##### `childAssociatedResources`<sup>Required</sup> <a name="childAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources"></a>

```typescript
public readonly childAssociatedResources: string[];
```

- *Type:* string[]

---

##### `percentageValue`<sup>Required</sup> <a name="percentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue"></a>

```typescript
public readonly percentageValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---


### BillingconductorCustomLineItemPresentationDetailsOutputReference <a name="BillingconductorCustomLineItemPresentationDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemPresentationDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---


### BillingconductorCustomLineItemTagsList <a name="BillingconductorCustomLineItemTagsList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get"></a>

```typescript
public get(index: number): BillingconductorCustomLineItemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>[]

---


### BillingconductorCustomLineItemTagsOutputReference <a name="BillingconductorCustomLineItemTagsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer"></a>

```typescript
import { billingconductorCustomLineItem } from '@cdktn/provider-awscc'

new billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BillingconductorCustomLineItemTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>

---



