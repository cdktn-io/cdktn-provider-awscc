# `sesConfigurationSet` Submodule <a name="`sesConfigurationSet` Submodule" id="@cdktn/provider-awscc.sesConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSet <a name="SesConfigurationSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set awscc_ses_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSet(scope: Construct, id: string, config?: SesConfigurationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig">SesConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig">SesConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions">putArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions">putDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions">putReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions">putSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions">putSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions">putTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions">putVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions">resetArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions">resetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions">resetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions">resetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions">resetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions">resetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions">resetVdmOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArchivingOptions` <a name="putArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions"></a>

```typescript
public putArchivingOptions(value: SesConfigurationSetArchivingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---

##### `putDeliveryOptions` <a name="putDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions"></a>

```typescript
public putDeliveryOptions(value: SesConfigurationSetDeliveryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `putReputationOptions` <a name="putReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions"></a>

```typescript
public putReputationOptions(value: SesConfigurationSetReputationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---

##### `putSendingOptions` <a name="putSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions"></a>

```typescript
public putSendingOptions(value: SesConfigurationSetSendingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---

##### `putSuppressionOptions` <a name="putSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions"></a>

```typescript
public putSuppressionOptions(value: SesConfigurationSetSuppressionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags"></a>

```typescript
public putTags(value: IResolvable | SesConfigurationSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>[]

---

##### `putTrackingOptions` <a name="putTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions"></a>

```typescript
public putTrackingOptions(value: SesConfigurationSetTrackingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `putVdmOptions` <a name="putVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions"></a>

```typescript
public putVdmOptions(value: SesConfigurationSetVdmOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---

##### `resetArchivingOptions` <a name="resetArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions"></a>

```typescript
public resetArchivingOptions(): void
```

##### `resetDeliveryOptions` <a name="resetDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions"></a>

```typescript
public resetDeliveryOptions(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName"></a>

```typescript
public resetName(): void
```

##### `resetReputationOptions` <a name="resetReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions"></a>

```typescript
public resetReputationOptions(): void
```

##### `resetSendingOptions` <a name="resetSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions"></a>

```typescript
public resetSendingOptions(): void
```

##### `resetSuppressionOptions` <a name="resetSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions"></a>

```typescript
public resetSuppressionOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrackingOptions` <a name="resetTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions"></a>

```typescript
public resetTrackingOptions(): void
```

##### `resetVdmOptions` <a name="resetVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions"></a>

```typescript
public resetVdmOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

sesConfigurationSet.SesConfigurationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

sesConfigurationSet.SesConfigurationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

sesConfigurationSet.SesConfigurationSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

sesConfigurationSet.SesConfigurationSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions">archivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput">archivingOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput">deliveryOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput">reputationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput">sendingOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput">suppressionOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput">trackingOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput">vdmOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `archivingOptions`<sup>Required</sup> <a name="archivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions"></a>

```typescript
public readonly archivingOptions: SesConfigurationSetArchivingOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a>

---

##### `deliveryOptions`<sup>Required</sup> <a name="deliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions"></a>

```typescript
public readonly deliveryOptions: SesConfigurationSetDeliveryOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `reputationOptions`<sup>Required</sup> <a name="reputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions"></a>

```typescript
public readonly reputationOptions: SesConfigurationSetReputationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a>

---

##### `sendingOptions`<sup>Required</sup> <a name="sendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions"></a>

```typescript
public readonly sendingOptions: SesConfigurationSetSendingOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a>

---

##### `suppressionOptions`<sup>Required</sup> <a name="suppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions"></a>

```typescript
public readonly suppressionOptions: SesConfigurationSetSuppressionOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags"></a>

```typescript
public readonly tags: SesConfigurationSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a>

---

##### `trackingOptions`<sup>Required</sup> <a name="trackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions"></a>

```typescript
public readonly trackingOptions: SesConfigurationSetTrackingOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a>

---

##### `vdmOptions`<sup>Required</sup> <a name="vdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions"></a>

```typescript
public readonly vdmOptions: SesConfigurationSetVdmOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a>

---

##### `archivingOptionsInput`<sup>Optional</sup> <a name="archivingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput"></a>

```typescript
public readonly archivingOptionsInput: IResolvable | SesConfigurationSetArchivingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---

##### `deliveryOptionsInput`<sup>Optional</sup> <a name="deliveryOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput"></a>

```typescript
public readonly deliveryOptionsInput: IResolvable | SesConfigurationSetDeliveryOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `reputationOptionsInput`<sup>Optional</sup> <a name="reputationOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput"></a>

```typescript
public readonly reputationOptionsInput: IResolvable | SesConfigurationSetReputationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---

##### `sendingOptionsInput`<sup>Optional</sup> <a name="sendingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput"></a>

```typescript
public readonly sendingOptionsInput: IResolvable | SesConfigurationSetSendingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---

##### `suppressionOptionsInput`<sup>Optional</sup> <a name="suppressionOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput"></a>

```typescript
public readonly suppressionOptionsInput: IResolvable | SesConfigurationSetSuppressionOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SesConfigurationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>[]

---

##### `trackingOptionsInput`<sup>Optional</sup> <a name="trackingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput"></a>

```typescript
public readonly trackingOptionsInput: IResolvable | SesConfigurationSetTrackingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `vdmOptionsInput`<sup>Optional</sup> <a name="vdmOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput"></a>

```typescript
public readonly vdmOptionsInput: IResolvable | SesConfigurationSetVdmOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetArchivingOptions <a name="SesConfigurationSetArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetArchivingOptions: sesConfigurationSet.SesConfigurationSetArchivingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn">archiveArn</a></code> | <code>string</code> | The ARN of the MailManager archive to associate with the configuration set. |

---

##### `archiveArn`<sup>Optional</sup> <a name="archiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn"></a>

```typescript
public readonly archiveArn: string;
```

- *Type:* string

The ARN of the MailManager archive to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#archive_arn SesConfigurationSet#archive_arn}

---

### SesConfigurationSetConfig <a name="SesConfigurationSetConfig" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetConfig: sesConfigurationSet.SesConfigurationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions">archivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name">name</a></code> | <code>string</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | An object that defines whether or not Amazon SES can send email that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | An object that contains information about the suppression list preferences for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>[]</code> | The tags (keys and values) associated with the contact list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | An object that defines the open and click tracking options for emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `archivingOptions`<sup>Optional</sup> <a name="archivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions"></a>

```typescript
public readonly archivingOptions: SesConfigurationSetArchivingOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#archiving_options SesConfigurationSet#archiving_options}

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions"></a>

```typescript
public readonly deliveryOptions: SesConfigurationSetDeliveryOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}

---

##### `reputationOptions`<sup>Optional</sup> <a name="reputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions"></a>

```typescript
public readonly reputationOptions: SesConfigurationSetReputationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#reputation_options SesConfigurationSet#reputation_options}

---

##### `sendingOptions`<sup>Optional</sup> <a name="sendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions"></a>

```typescript
public readonly sendingOptions: SesConfigurationSetSendingOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

An object that defines whether or not Amazon SES can send email that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#sending_options SesConfigurationSet#sending_options}

---

##### `suppressionOptions`<sup>Optional</sup> <a name="suppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions"></a>

```typescript
public readonly suppressionOptions: SesConfigurationSetSuppressionOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

An object that contains information about the suppression list preferences for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#suppression_options SesConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SesConfigurationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>[]

The tags (keys and values) associated with the contact list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#tags SesConfigurationSet#tags}

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions"></a>

```typescript
public readonly trackingOptions: SesConfigurationSetTrackingOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

An object that defines the open and click tracking options for emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

##### `vdmOptions`<sup>Optional</sup> <a name="vdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions"></a>

```typescript
public readonly vdmOptions: SesConfigurationSetVdmOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#vdm_options SesConfigurationSet#vdm_options}

---

### SesConfigurationSetDeliveryOptions <a name="SesConfigurationSetDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetDeliveryOptions: sesConfigurationSet.SesConfigurationSetDeliveryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds">maxDeliverySeconds</a></code> | <code>number</code> | Specifies the maximum time until which SES will retry sending emails. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName">sendingPoolName</a></code> | <code>string</code> | The name of the dedicated IP pool to associate with the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). |

---

##### `maxDeliverySeconds`<sup>Optional</sup> <a name="maxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds"></a>

```typescript
public readonly maxDeliverySeconds: number;
```

- *Type:* number

Specifies the maximum time until which SES will retry sending emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#max_delivery_seconds SesConfigurationSet#max_delivery_seconds}

---

##### `sendingPoolName`<sup>Optional</sup> <a name="sendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

```typescript
public readonly sendingPoolName: string;
```

- *Type:* string

The name of the dedicated IP pool to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#sending_pool_name SesConfigurationSet#sending_pool_name}

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).

If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}

---

### SesConfigurationSetReputationOptions <a name="SesConfigurationSetReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetReputationOptions: sesConfigurationSet.SesConfigurationSetReputationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true , tracking of reputation metrics is enabled for the configuration set. |

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="reputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

```typescript
public readonly reputationMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true , tracking of reputation metrics is enabled for the configuration set.

If false , tracking of reputation metrics is disabled for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}

---

### SesConfigurationSetSendingOptions <a name="SesConfigurationSetSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetSendingOptions: sesConfigurationSet.SesConfigurationSetSendingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled">sendingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}. |

---

##### `sendingEnabled`<sup>Optional</sup> <a name="sendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled"></a>

```typescript
public readonly sendingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

### SesConfigurationSetSuppressionOptions <a name="SesConfigurationSetSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetSuppressionOptions: sesConfigurationSet.SesConfigurationSetSuppressionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons">suppressedReasons</a></code> | <code>string[]</code> | A list that contains the reasons that email addresses are automatically added to the suppression list for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | An object that contains information about the validation options for your account. |

---

##### `suppressedReasons`<sup>Optional</sup> <a name="suppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

```typescript
public readonly suppressedReasons: string[];
```

- *Type:* string[]

A list that contains the reasons that email addresses are automatically added to the suppression list for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#suppressed_reasons SesConfigurationSet#suppressed_reasons}

---

##### `validationOptions`<sup>Optional</sup> <a name="validationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions"></a>

```typescript
public readonly validationOptions: SesConfigurationSetSuppressionOptionsValidationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

An object that contains information about the validation options for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#validation_options SesConfigurationSet#validation_options}

---

### SesConfigurationSetSuppressionOptionsValidationOptions <a name="SesConfigurationSetSuppressionOptionsValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetSuppressionOptionsValidationOptions: sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | The condition threshold settings for suppression validation. |

---

##### `conditionThreshold`<sup>Optional</sup> <a name="conditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold"></a>

```typescript
public readonly conditionThreshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

The condition threshold settings for suppression validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#condition_threshold SesConfigurationSet#condition_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold: sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled">conditionThresholdEnabled</a></code> | <code>string</code> | Whether the condition threshold is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold">overallConfidenceThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | The overall confidence threshold settings. |

---

##### `conditionThresholdEnabled`<sup>Optional</sup> <a name="conditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled"></a>

```typescript
public readonly conditionThresholdEnabled: string;
```

- *Type:* string

Whether the condition threshold is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#condition_threshold_enabled SesConfigurationSet#condition_threshold_enabled}

---

##### `overallConfidenceThreshold`<sup>Optional</sup> <a name="overallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold"></a>

```typescript
public readonly overallConfidenceThreshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

The overall confidence threshold settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#overall_confidence_threshold SesConfigurationSet#overall_confidence_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold: sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold">confidenceVerdictThreshold</a></code> | <code>string</code> | The confidence verdict threshold level. |

---

##### `confidenceVerdictThreshold`<sup>Optional</sup> <a name="confidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold"></a>

```typescript
public readonly confidenceVerdictThreshold: string;
```

- *Type:* string

The confidence verdict threshold level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#confidence_verdict_threshold SesConfigurationSet#confidence_verdict_threshold}

---

### SesConfigurationSetTags <a name="SesConfigurationSetTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetTags: sesConfigurationSet.SesConfigurationSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}.

---

### SesConfigurationSetTrackingOptions <a name="SesConfigurationSetTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetTrackingOptions: sesConfigurationSet.SesConfigurationSetTrackingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain">customRedirectDomain</a></code> | <code>string</code> | The domain to use for tracking open and click events. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy">httpsPolicy</a></code> | <code>string</code> | The https policy to use for tracking open and click events. |

---

##### `customRedirectDomain`<sup>Optional</sup> <a name="customRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```typescript
public readonly customRedirectDomain: string;
```

- *Type:* string

The domain to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}

---

##### `httpsPolicy`<sup>Optional</sup> <a name="httpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy"></a>

```typescript
public readonly httpsPolicy: string;
```

- *Type:* string

The https policy to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#https_policy SesConfigurationSet#https_policy}

---

### SesConfigurationSetVdmOptions <a name="SesConfigurationSetVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetVdmOptions: sesConfigurationSet.SesConfigurationSetVdmOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions">dashboardOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | Preferences regarding the Dashboard feature. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions">guardianOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | Preferences regarding the Guardian feature. |

---

##### `dashboardOptions`<sup>Optional</sup> <a name="dashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions"></a>

```typescript
public readonly dashboardOptions: SesConfigurationSetVdmOptionsDashboardOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

Preferences regarding the Dashboard feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#dashboard_options SesConfigurationSet#dashboard_options}

---

##### `guardianOptions`<sup>Optional</sup> <a name="guardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions"></a>

```typescript
public readonly guardianOptions: SesConfigurationSetVdmOptionsGuardianOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

Preferences regarding the Guardian feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#guardian_options SesConfigurationSet#guardian_options}

---

### SesConfigurationSetVdmOptionsDashboardOptions <a name="SesConfigurationSetVdmOptionsDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetVdmOptionsDashboardOptions: sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics">engagementMetrics</a></code> | <code>string</code> | Whether emails sent with this configuration set have engagement tracking enabled. |

---

##### `engagementMetrics`<sup>Optional</sup> <a name="engagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics"></a>

```typescript
public readonly engagementMetrics: string;
```

- *Type:* string

Whether emails sent with this configuration set have engagement tracking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#engagement_metrics SesConfigurationSet#engagement_metrics}

---

### SesConfigurationSetVdmOptionsGuardianOptions <a name="SesConfigurationSetVdmOptionsGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

const sesConfigurationSetVdmOptionsGuardianOptions: sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>string</code> | Whether emails sent with this configuration set have optimized delivery algorithm enabled. |

---

##### `optimizedSharedDelivery`<sup>Optional</sup> <a name="optimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery"></a>

```typescript
public readonly optimizedSharedDelivery: string;
```

- *Type:* string

Whether emails sent with this configuration set have optimized delivery algorithm enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set#optimized_shared_delivery SesConfigurationSet#optimized_shared_delivery}

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetArchivingOptionsOutputReference <a name="SesConfigurationSetArchivingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn">resetArchiveArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveArn` <a name="resetArchiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn"></a>

```typescript
public resetArchiveArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput">archiveArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn">archiveArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archiveArnInput`<sup>Optional</sup> <a name="archiveArnInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput"></a>

```typescript
public readonly archiveArnInput: string;
```

- *Type:* string

---

##### `archiveArn`<sup>Required</sup> <a name="archiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn"></a>

```typescript
public readonly archiveArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetArchivingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---


### SesConfigurationSetDeliveryOptionsOutputReference <a name="SesConfigurationSetDeliveryOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds">resetMaxDeliverySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName">resetSendingPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDeliverySeconds` <a name="resetMaxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds"></a>

```typescript
public resetMaxDeliverySeconds(): void
```

##### `resetSendingPoolName` <a name="resetSendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName"></a>

```typescript
public resetSendingPoolName(): void
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```typescript
public resetTlsPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput">maxDeliverySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput">sendingPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds">maxDeliverySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">sendingPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxDeliverySecondsInput`<sup>Optional</sup> <a name="maxDeliverySecondsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput"></a>

```typescript
public readonly maxDeliverySecondsInput: number;
```

- *Type:* number

---

##### `sendingPoolNameInput`<sup>Optional</sup> <a name="sendingPoolNameInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput"></a>

```typescript
public readonly sendingPoolNameInput: string;
```

- *Type:* string

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```typescript
public readonly tlsPolicyInput: string;
```

- *Type:* string

---

##### `maxDeliverySeconds`<sup>Required</sup> <a name="maxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds"></a>

```typescript
public readonly maxDeliverySeconds: number;
```

- *Type:* number

---

##### `sendingPoolName`<sup>Required</sup> <a name="sendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```typescript
public readonly sendingPoolName: string;
```

- *Type:* string

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetDeliveryOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---


### SesConfigurationSetReputationOptionsOutputReference <a name="SesConfigurationSetReputationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled">resetReputationMetricsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReputationMetricsEnabled` <a name="resetReputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled"></a>

```typescript
public resetReputationMetricsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput">reputationMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reputationMetricsEnabledInput`<sup>Optional</sup> <a name="reputationMetricsEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput"></a>

```typescript
public readonly reputationMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="reputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```typescript
public readonly reputationMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetReputationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---


### SesConfigurationSetSendingOptionsOutputReference <a name="SesConfigurationSetSendingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled">resetSendingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendingEnabled` <a name="resetSendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled"></a>

```typescript
public resetSendingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput">sendingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">sendingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sendingEnabledInput`<sup>Optional</sup> <a name="sendingEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput"></a>

```typescript
public readonly sendingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sendingEnabled`<sup>Required</sup> <a name="sendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```typescript
public readonly sendingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetSendingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---


### SesConfigurationSetSuppressionOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions">putValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons">resetSuppressedReasons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions">resetValidationOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValidationOptions` <a name="putValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions"></a>

```typescript
public putValidationOptions(value: SesConfigurationSetSuppressionOptionsValidationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---

##### `resetSuppressedReasons` <a name="resetSuppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons"></a>

```typescript
public resetSuppressedReasons(): void
```

##### `resetValidationOptions` <a name="resetValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions"></a>

```typescript
public resetValidationOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput">suppressedReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput">validationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">suppressedReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validationOptions`<sup>Required</sup> <a name="validationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions"></a>

```typescript
public readonly validationOptions: SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a>

---

##### `suppressedReasonsInput`<sup>Optional</sup> <a name="suppressedReasonsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput"></a>

```typescript
public readonly suppressedReasonsInput: string[];
```

- *Type:* string[]

---

##### `validationOptionsInput`<sup>Optional</sup> <a name="validationOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput"></a>

```typescript
public readonly validationOptionsInput: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---

##### `suppressedReasons`<sup>Required</sup> <a name="suppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```typescript
public readonly suppressedReasons: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetSuppressionOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold">putOverallConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled">resetConditionThresholdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold">resetOverallConfidenceThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverallConfidenceThreshold` <a name="putOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold"></a>

```typescript
public putOverallConfidenceThreshold(value: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---

##### `resetConditionThresholdEnabled` <a name="resetConditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled"></a>

```typescript
public resetConditionThresholdEnabled(): void
```

##### `resetOverallConfidenceThreshold` <a name="resetOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold"></a>

```typescript
public resetOverallConfidenceThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold">overallConfidenceThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput">conditionThresholdEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput">overallConfidenceThresholdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled">conditionThresholdEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overallConfidenceThreshold`<sup>Required</sup> <a name="overallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold"></a>

```typescript
public readonly overallConfidenceThreshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a>

---

##### `conditionThresholdEnabledInput`<sup>Optional</sup> <a name="conditionThresholdEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput"></a>

```typescript
public readonly conditionThresholdEnabledInput: string;
```

- *Type:* string

---

##### `overallConfidenceThresholdInput`<sup>Optional</sup> <a name="overallConfidenceThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput"></a>

```typescript
public readonly overallConfidenceThresholdInput: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---

##### `conditionThresholdEnabled`<sup>Required</sup> <a name="conditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled"></a>

```typescript
public readonly conditionThresholdEnabled: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold">resetConfidenceVerdictThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceVerdictThreshold` <a name="resetConfidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold"></a>

```typescript
public resetConfidenceVerdictThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput">confidenceVerdictThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold">confidenceVerdictThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceVerdictThresholdInput`<sup>Optional</sup> <a name="confidenceVerdictThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput"></a>

```typescript
public readonly confidenceVerdictThresholdInput: string;
```

- *Type:* string

---

##### `confidenceVerdictThreshold`<sup>Required</sup> <a name="confidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold"></a>

```typescript
public readonly confidenceVerdictThreshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold">putConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold">resetConditionThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionThreshold` <a name="putConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold"></a>

```typescript
public putConditionThreshold(value: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---

##### `resetConditionThreshold` <a name="resetConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold"></a>

```typescript
public resetConditionThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput">conditionThresholdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionThreshold`<sup>Required</sup> <a name="conditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold"></a>

```typescript
public readonly conditionThreshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a>

---

##### `conditionThresholdInput`<sup>Optional</sup> <a name="conditionThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput"></a>

```typescript
public readonly conditionThresholdInput: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---


### SesConfigurationSetTagsList <a name="SesConfigurationSetTagsList" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get"></a>

```typescript
public get(index: number): SesConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>[]

---


### SesConfigurationSetTagsOutputReference <a name="SesConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>

---


### SesConfigurationSetTrackingOptionsOutputReference <a name="SesConfigurationSetTrackingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain">resetCustomRedirectDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy">resetHttpsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomRedirectDomain` <a name="resetCustomRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain"></a>

```typescript
public resetCustomRedirectDomain(): void
```

##### `resetHttpsPolicy` <a name="resetHttpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy"></a>

```typescript
public resetHttpsPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">customRedirectDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput">httpsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">customRedirectDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy">httpsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRedirectDomainInput`<sup>Optional</sup> <a name="customRedirectDomainInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```typescript
public readonly customRedirectDomainInput: string;
```

- *Type:* string

---

##### `httpsPolicyInput`<sup>Optional</sup> <a name="httpsPolicyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput"></a>

```typescript
public readonly httpsPolicyInput: string;
```

- *Type:* string

---

##### `customRedirectDomain`<sup>Required</sup> <a name="customRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```typescript
public readonly customRedirectDomain: string;
```

- *Type:* string

---

##### `httpsPolicy`<sup>Required</sup> <a name="httpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy"></a>

```typescript
public readonly httpsPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetTrackingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---


### SesConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="SesConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics">resetEngagementMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEngagementMetrics` <a name="resetEngagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics"></a>

```typescript
public resetEngagementMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput">engagementMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">engagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engagementMetricsInput`<sup>Optional</sup> <a name="engagementMetricsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput"></a>

```typescript
public readonly engagementMetricsInput: string;
```

- *Type:* string

---

##### `engagementMetrics`<sup>Required</sup> <a name="engagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```typescript
public readonly engagementMetrics: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetVdmOptionsDashboardOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---


### SesConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="SesConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery">resetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptimizedSharedDelivery` <a name="resetOptimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery"></a>

```typescript
public resetOptimizedSharedDelivery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput">optimizedSharedDeliveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optimizedSharedDeliveryInput`<sup>Optional</sup> <a name="optimizedSharedDeliveryInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput"></a>

```typescript
public readonly optimizedSharedDeliveryInput: string;
```

- *Type:* string

---

##### `optimizedSharedDelivery`<sup>Required</sup> <a name="optimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```typescript
public readonly optimizedSharedDelivery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetVdmOptionsGuardianOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---


### SesConfigurationSetVdmOptionsOutputReference <a name="SesConfigurationSetVdmOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```typescript
import { sesConfigurationSet } from '@cdktn/provider-awscc'

new sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions">putDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions">putGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions">resetDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions">resetGuardianOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDashboardOptions` <a name="putDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions"></a>

```typescript
public putDashboardOptions(value: SesConfigurationSetVdmOptionsDashboardOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `putGuardianOptions` <a name="putGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions"></a>

```typescript
public putGuardianOptions(value: SesConfigurationSetVdmOptionsGuardianOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `resetDashboardOptions` <a name="resetDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions"></a>

```typescript
public resetDashboardOptions(): void
```

##### `resetGuardianOptions` <a name="resetGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions"></a>

```typescript
public resetGuardianOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">dashboardOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions">guardianOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput">dashboardOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput">guardianOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashboardOptions`<sup>Required</sup> <a name="dashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```typescript
public readonly dashboardOptions: SesConfigurationSetVdmOptionsDashboardOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a>

---

##### `guardianOptions`<sup>Required</sup> <a name="guardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```typescript
public readonly guardianOptions: SesConfigurationSetVdmOptionsGuardianOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a>

---

##### `dashboardOptionsInput`<sup>Optional</sup> <a name="dashboardOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput"></a>

```typescript
public readonly dashboardOptionsInput: IResolvable | SesConfigurationSetVdmOptionsDashboardOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `guardianOptionsInput`<sup>Optional</sup> <a name="guardianOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput"></a>

```typescript
public readonly guardianOptionsInput: IResolvable | SesConfigurationSetVdmOptionsGuardianOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesConfigurationSetVdmOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---



