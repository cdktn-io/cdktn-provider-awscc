# `cloudtrailEventDataStore` Submodule <a name="`cloudtrailEventDataStore` Submodule" id="@cdktn/provider-awscc.cloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailEventDataStore <a name="CloudtrailEventDataStore" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStore(scope: Construct, id: string, config?: CloudtrailEventDataStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelectors">putAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putContextKeySelectors">putContextKeySelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putInsightSelectors">putInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelectors">resetAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetContextKeySelectors">resetContextKeySelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationEnabled">resetFederationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationRoleArn">resetFederationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetIngestionEnabled">resetIngestionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightsDestination">resetInsightsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightSelectors">resetInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMaxEventSize">resetMaxEventSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled">resetMultiRegionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled">resetOrganizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedEventSelectors` <a name="putAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelectors"></a>

```typescript
public putAdvancedEventSelectors(value: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

---

##### `putContextKeySelectors` <a name="putContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putContextKeySelectors"></a>

```typescript
public putContextKeySelectors(value: IResolvable | CloudtrailEventDataStoreContextKeySelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putContextKeySelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

---

##### `putInsightSelectors` <a name="putInsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putInsightSelectors"></a>

```typescript
public putInsightSelectors(value: IResolvable | CloudtrailEventDataStoreInsightSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putInsightSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudtrailEventDataStoreTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

---

##### `resetAdvancedEventSelectors` <a name="resetAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelectors"></a>

```typescript
public resetAdvancedEventSelectors(): void
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetBillingMode"></a>

```typescript
public resetBillingMode(): void
```

##### `resetContextKeySelectors` <a name="resetContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetContextKeySelectors"></a>

```typescript
public resetContextKeySelectors(): void
```

##### `resetFederationEnabled` <a name="resetFederationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationEnabled"></a>

```typescript
public resetFederationEnabled(): void
```

##### `resetFederationRoleArn` <a name="resetFederationRoleArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetFederationRoleArn"></a>

```typescript
public resetFederationRoleArn(): void
```

##### `resetIngestionEnabled` <a name="resetIngestionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetIngestionEnabled"></a>

```typescript
public resetIngestionEnabled(): void
```

##### `resetInsightsDestination` <a name="resetInsightsDestination" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightsDestination"></a>

```typescript
public resetInsightsDestination(): void
```

##### `resetInsightSelectors` <a name="resetInsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetInsightSelectors"></a>

```typescript
public resetInsightSelectors(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMaxEventSize` <a name="resetMaxEventSize" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMaxEventSize"></a>

```typescript
public resetMaxEventSize(): void
```

##### `resetMultiRegionEnabled` <a name="resetMultiRegionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled"></a>

```typescript
public resetMultiRegionEnabled(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrganizationEnabled` <a name="resetOrganizationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled"></a>

```typescript
public resetOrganizationEnabled(): void
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled"></a>

```typescript
public resetTerminationProtectionEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudtrailEventDataStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudtrailEventDataStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudtrailEventDataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudtrailEventDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailEventDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectors">contextKeySelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList">CloudtrailEventDataStoreContextKeySelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.eventDataStoreArn">eventDataStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectors">insightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList">CloudtrailEventDataStoreInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList">CloudtrailEventDataStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorsInput">advancedEventSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingModeInput">billingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectorsInput">contextKeySelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabledInput">federationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArnInput">federationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabledInput">ingestionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestinationInput">insightsDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectorsInput">insightSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSizeInput">maxEventSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput">multiRegionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput">organizationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingMode">billingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabled">federationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArn">federationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabled">ingestionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestination">insightsDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSize">maxEventSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled">multiRegionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled">organizationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `advancedEventSelectors`<sup>Required</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectors"></a>

```typescript
public readonly advancedEventSelectors: CloudtrailEventDataStoreAdvancedEventSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsList</a>

---

##### `contextKeySelectors`<sup>Required</sup> <a name="contextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectors"></a>

```typescript
public readonly contextKeySelectors: CloudtrailEventDataStoreContextKeySelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList">CloudtrailEventDataStoreContextKeySelectorsList</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `eventDataStoreArn`<sup>Required</sup> <a name="eventDataStoreArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.eventDataStoreArn"></a>

```typescript
public readonly eventDataStoreArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insightSelectors`<sup>Required</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectors"></a>

```typescript
public readonly insightSelectors: CloudtrailEventDataStoreInsightSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList">CloudtrailEventDataStoreInsightSelectorsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags"></a>

```typescript
public readonly tags: CloudtrailEventDataStoreTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList">CloudtrailEventDataStoreTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `advancedEventSelectorsInput`<sup>Optional</sup> <a name="advancedEventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorsInput"></a>

```typescript
public readonly advancedEventSelectorsInput: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingModeInput"></a>

```typescript
public readonly billingModeInput: string;
```

- *Type:* string

---

##### `contextKeySelectorsInput`<sup>Optional</sup> <a name="contextKeySelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.contextKeySelectorsInput"></a>

```typescript
public readonly contextKeySelectorsInput: IResolvable | CloudtrailEventDataStoreContextKeySelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

---

##### `federationEnabledInput`<sup>Optional</sup> <a name="federationEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabledInput"></a>

```typescript
public readonly federationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `federationRoleArnInput`<sup>Optional</sup> <a name="federationRoleArnInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArnInput"></a>

```typescript
public readonly federationRoleArnInput: string;
```

- *Type:* string

---

##### `ingestionEnabledInput`<sup>Optional</sup> <a name="ingestionEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabledInput"></a>

```typescript
public readonly ingestionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `insightsDestinationInput`<sup>Optional</sup> <a name="insightsDestinationInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestinationInput"></a>

```typescript
public readonly insightsDestinationInput: string;
```

- *Type:* string

---

##### `insightSelectorsInput`<sup>Optional</sup> <a name="insightSelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightSelectorsInput"></a>

```typescript
public readonly insightSelectorsInput: IResolvable | CloudtrailEventDataStoreInsightSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `maxEventSizeInput`<sup>Optional</sup> <a name="maxEventSizeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSizeInput"></a>

```typescript
public readonly maxEventSizeInput: string;
```

- *Type:* string

---

##### `multiRegionEnabledInput`<sup>Optional</sup> <a name="multiRegionEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput"></a>

```typescript
public readonly multiRegionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationEnabledInput`<sup>Optional</sup> <a name="organizationEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput"></a>

```typescript
public readonly organizationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudtrailEventDataStoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput"></a>

```typescript
public readonly terminationProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingMode"></a>

```typescript
public readonly billingMode: string;
```

- *Type:* string

---

##### `federationEnabled`<sup>Required</sup> <a name="federationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationEnabled"></a>

```typescript
public readonly federationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `federationRoleArn`<sup>Required</sup> <a name="federationRoleArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.federationRoleArn"></a>

```typescript
public readonly federationRoleArn: string;
```

- *Type:* string

---

##### `ingestionEnabled`<sup>Required</sup> <a name="ingestionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.ingestionEnabled"></a>

```typescript
public readonly ingestionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `insightsDestination`<sup>Required</sup> <a name="insightsDestination" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.insightsDestination"></a>

```typescript
public readonly insightsDestination: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `maxEventSize`<sup>Required</sup> <a name="maxEventSize" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.maxEventSize"></a>

```typescript
public readonly maxEventSize: string;
```

- *Type:* string

---

##### `multiRegionEnabled`<sup>Required</sup> <a name="multiRegionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled"></a>

```typescript
public readonly multiRegionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationEnabled`<sup>Required</sup> <a name="organizationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled"></a>

```typescript
public readonly organizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailEventDataStoreAdvancedEventSelectors <a name="CloudtrailEventDataStoreAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

const cloudtrailEventDataStoreAdvancedEventSelectors: cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.fieldSelectors">fieldSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.name">name</a></code> | <code>string</code> | An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets". |

---

##### `fieldSelectors`<sup>Optional</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.fieldSelectors"></a>

```typescript
public readonly fieldSelectors: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#field_selectors CloudtrailEventDataStore#field_selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}

---

### CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors <a name="CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

const cloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors: cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.endsWith">endsWith</a></code> | <code>string[]</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.equalTo">equalTo</a></code> | <code>string[]</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.field">field</a></code> | <code>string</code> | A field in an event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEquals">notEquals</a></code> | <code>string[]</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.startsWith">startsWith</a></code> | <code>string[]</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

An operator that includes events that match the exact value of the event record field specified as the value of Field.

This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

A field in an event record on which to filter events to be logged.

Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}

---

### CloudtrailEventDataStoreConfig <a name="CloudtrailEventDataStoreConfig" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

const cloudtrailEventDataStoreConfig: cloudtrailEventDataStore.CloudtrailEventDataStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]</code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.billingMode">billingMode</a></code> | <code>string</code> | The mode that the event data store will use to charge for event storage. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.contextKeySelectors">contextKeySelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]</code> | An array that enriches event records in an existing event data store by including additional information specified in individual ContexKeySelector entries. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationEnabled">federationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether federation is enabled on an event data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationRoleArn">federationRoleArn</a></code> | <code>string</code> | The ARN of the role used for event data store federation. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.ingestionEnabled">ingestionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the event data store is ingesting events. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightsDestination">insightsDestination</a></code> | <code>string</code> | Specifies the ARN of the event data store that will collect Insights events. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightSelectors">insightSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]</code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.maxEventSize">maxEventSize</a></code> | <code>string</code> | Specifies the maximum size allowed for the event. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled">multiRegionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the event data store includes events from all regions, or only from the region in which it was created. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name">name</a></code> | <code>string</code> | The name of the event data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled">organizationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates that an event data store is collecting logged events for an organization. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | The retention period, in days. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the event data store is protected from termination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `advancedEventSelectors`<sup>Optional</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelectors"></a>

```typescript
public readonly advancedEventSelectors: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#advanced_event_selectors CloudtrailEventDataStore#advanced_event_selectors}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.billingMode"></a>

```typescript
public readonly billingMode: string;
```

- *Type:* string

The mode that the event data store will use to charge for event storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#billing_mode CloudtrailEventDataStore#billing_mode}

---

##### `contextKeySelectors`<sup>Optional</sup> <a name="contextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.contextKeySelectors"></a>

```typescript
public readonly contextKeySelectors: IResolvable | CloudtrailEventDataStoreContextKeySelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

An array that enriches event records in an existing event data store by including additional information specified in individual ContexKeySelector entries.

If you add ContextKeySelectors, you must set MaxEventSize to Large.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#context_key_selectors CloudtrailEventDataStore#context_key_selectors}

---

##### `federationEnabled`<sup>Optional</sup> <a name="federationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationEnabled"></a>

```typescript
public readonly federationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether federation is enabled on an event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#federation_enabled CloudtrailEventDataStore#federation_enabled}

---

##### `federationRoleArn`<sup>Optional</sup> <a name="federationRoleArn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.federationRoleArn"></a>

```typescript
public readonly federationRoleArn: string;
```

- *Type:* string

The ARN of the role used for event data store federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#federation_role_arn CloudtrailEventDataStore#federation_role_arn}

---

##### `ingestionEnabled`<sup>Optional</sup> <a name="ingestionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.ingestionEnabled"></a>

```typescript
public readonly ingestionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the event data store is ingesting events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#ingestion_enabled CloudtrailEventDataStore#ingestion_enabled}

---

##### `insightsDestination`<sup>Optional</sup> <a name="insightsDestination" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightsDestination"></a>

```typescript
public readonly insightsDestination: string;
```

- *Type:* string

Specifies the ARN of the event data store that will collect Insights events.

Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#insights_destination CloudtrailEventDataStore#insights_destination}

---

##### `insightSelectors`<sup>Optional</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.insightSelectors"></a>

```typescript
public readonly insightSelectors: IResolvable | CloudtrailEventDataStoreInsightSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store.

Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#insight_selectors CloudtrailEventDataStore#insight_selectors}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}

---

##### `maxEventSize`<sup>Optional</sup> <a name="maxEventSize" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.maxEventSize"></a>

```typescript
public readonly maxEventSize: string;
```

- *Type:* string

Specifies the maximum size allowed for the event.

Valid values are Standard and Large. If you add ContextKeySelectors, this value must be set to Large.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#max_event_size CloudtrailEventDataStore#max_event_size}

---

##### `multiRegionEnabled`<sup>Optional</sup> <a name="multiRegionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled"></a>

```typescript
public readonly multiRegionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the event data store includes events from all regions, or only from the region in which it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}

---

##### `organizationEnabled`<sup>Optional</sup> <a name="organizationEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled"></a>

```typescript
public readonly organizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates that an event data store is collecting logged events for an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

The retention period, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudtrailEventDataStoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the event data store is protected from termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}

---

### CloudtrailEventDataStoreContextKeySelectors <a name="CloudtrailEventDataStoreContextKeySelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

const cloudtrailEventDataStoreContextKeySelectors: cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.equalTo">equalTo</a></code> | <code>string[]</code> | An operator that includes events that match the exact value of the event record field specified in Type. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.type">type</a></code> | <code>string</code> | Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext. |

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

An operator that includes events that match the exact value of the event record field specified in Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#type CloudtrailEventDataStore#type}

---

### CloudtrailEventDataStoreInsightSelectors <a name="CloudtrailEventDataStoreInsightSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

const cloudtrailEventDataStoreInsightSelectors: cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors.property.insightType">insightType</a></code> | <code>string</code> | The type of Insights to log on an event data store. |

---

##### `insightType`<sup>Optional</sup> <a name="insightType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors.property.insightType"></a>

```typescript
public readonly insightType: string;
```

- *Type:* string

The type of Insights to log on an event data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#insight_type CloudtrailEventDataStore#insight_type}

---

### CloudtrailEventDataStoreTags <a name="CloudtrailEventDataStoreTags" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

const cloudtrailEventDataStoreTags: cloudtrailEventDataStore.CloudtrailEventDataStoreTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#key CloudtrailEventDataStore#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_event_data_store#value CloudtrailEventDataStore#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList <a name="CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

---


### CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```typescript
public resetEqualTo(): void
```

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```typescript
public resetNotEndsWith(): void
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```typescript
public resetNotEquals(): void
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```typescript
public resetNotStartsWith(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">equalToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">endsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">notEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">startsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string[];
```

- *Type:* string[]

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```typescript
public readonly equalToInput: string[];
```

- *Type:* string[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```typescript
public readonly notEndsWithInput: string[];
```

- *Type:* string[]

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```typescript
public readonly notEqualsInput: string[];
```

- *Type:* string[]

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```typescript
public readonly notStartsWithInput: string[];
```

- *Type:* string[]

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string[];
```

- *Type:* string[]

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>

---


### CloudtrailEventDataStoreAdvancedEventSelectorsList <a name="CloudtrailEventDataStoreAdvancedEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>[]

---


### CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.putFieldSelectors">putFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetFieldSelectors">resetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelectors` <a name="putFieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```typescript
public putFieldSelectors(value: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `resetFieldSelectors` <a name="resetFieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```typescript
public resetFieldSelectors(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors">fieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">fieldSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldSelectors`<sup>Required</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```typescript
public readonly fieldSelectors: CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `fieldSelectorsInput`<sup>Optional</sup> <a name="fieldSelectorsInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```typescript
public readonly fieldSelectorsInput: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">CloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreAdvancedEventSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectors">CloudtrailEventDataStoreAdvancedEventSelectors</a>

---


### CloudtrailEventDataStoreContextKeySelectorsList <a name="CloudtrailEventDataStoreContextKeySelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailEventDataStoreContextKeySelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreContextKeySelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>[]

---


### CloudtrailEventDataStoreContextKeySelectorsOutputReference <a name="CloudtrailEventDataStoreContextKeySelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetEqualTo"></a>

```typescript
public resetEqualTo(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalToInput">equalToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalToInput"></a>

```typescript
public readonly equalToInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreContextKeySelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreContextKeySelectors">CloudtrailEventDataStoreContextKeySelectors</a>

---


### CloudtrailEventDataStoreInsightSelectorsList <a name="CloudtrailEventDataStoreInsightSelectorsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailEventDataStoreInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreInsightSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>[]

---


### CloudtrailEventDataStoreInsightSelectorsOutputReference <a name="CloudtrailEventDataStoreInsightSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resetInsightType">resetInsightType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInsightType` <a name="resetInsightType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.resetInsightType"></a>

```typescript
public resetInsightType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightTypeInput">insightTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType">insightType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insightTypeInput`<sup>Optional</sup> <a name="insightTypeInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightTypeInput"></a>

```typescript
public readonly insightTypeInput: string;
```

- *Type:* string

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType"></a>

```typescript
public readonly insightType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreInsightSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreInsightSelectors">CloudtrailEventDataStoreInsightSelectors</a>

---


### CloudtrailEventDataStoreTagsList <a name="CloudtrailEventDataStoreTagsList" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.get"></a>

```typescript
public get(index: number): CloudtrailEventDataStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>[]

---


### CloudtrailEventDataStoreTagsOutputReference <a name="CloudtrailEventDataStoreTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer"></a>

```typescript
import { cloudtrailEventDataStore } from '@cdktn/provider-awscc'

new cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventDataStoreTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailEventDataStore.CloudtrailEventDataStoreTags">CloudtrailEventDataStoreTags</a>

---



