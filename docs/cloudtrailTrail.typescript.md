# `cloudtrailTrail` Submodule <a name="`cloudtrailTrail` Submodule" id="@cdktn/provider-awscc.cloudtrailTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailTrail <a name="CloudtrailTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail awscc_cloudtrail_trail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrail(scope: Construct, id: string, config: CloudtrailTrailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig">CloudtrailTrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig">CloudtrailTrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors">putAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations">putAggregationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors">putEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors">putInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors">resetAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations">resetAggregationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn">resetCloudwatchLogsLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn">resetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation">resetEnableLogFileValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors">resetEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents">resetIncludeGlobalServiceEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors">resetInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail">resetIsMultiRegionTrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail">resetIsOrganizationTrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName">resetSnsTopicName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName">resetTrailName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedEventSelectors` <a name="putAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors"></a>

```typescript
public putAdvancedEventSelectors(value: IResolvable | CloudtrailTrailAdvancedEventSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>[]

---

##### `putAggregationConfigurations` <a name="putAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations"></a>

```typescript
public putAggregationConfigurations(value: IResolvable | CloudtrailTrailAggregationConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>[]

---

##### `putEventSelectors` <a name="putEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors"></a>

```typescript
public putEventSelectors(value: IResolvable | CloudtrailTrailEventSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>[]

---

##### `putInsightSelectors` <a name="putInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors"></a>

```typescript
public putInsightSelectors(value: IResolvable | CloudtrailTrailInsightSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudtrailTrailTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>[]

---

##### `resetAdvancedEventSelectors` <a name="resetAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors"></a>

```typescript
public resetAdvancedEventSelectors(): void
```

##### `resetAggregationConfigurations` <a name="resetAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations"></a>

```typescript
public resetAggregationConfigurations(): void
```

##### `resetCloudwatchLogsLogGroupArn` <a name="resetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn"></a>

```typescript
public resetCloudwatchLogsLogGroupArn(): void
```

##### `resetCloudwatchLogsRoleArn` <a name="resetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn"></a>

```typescript
public resetCloudwatchLogsRoleArn(): void
```

##### `resetEnableLogFileValidation` <a name="resetEnableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation"></a>

```typescript
public resetEnableLogFileValidation(): void
```

##### `resetEventSelectors` <a name="resetEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors"></a>

```typescript
public resetEventSelectors(): void
```

##### `resetIncludeGlobalServiceEvents` <a name="resetIncludeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents"></a>

```typescript
public resetIncludeGlobalServiceEvents(): void
```

##### `resetInsightSelectors` <a name="resetInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors"></a>

```typescript
public resetInsightSelectors(): void
```

##### `resetIsMultiRegionTrail` <a name="resetIsMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail"></a>

```typescript
public resetIsMultiRegionTrail(): void
```

##### `resetIsOrganizationTrail` <a name="resetIsOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail"></a>

```typescript
public resetIsOrganizationTrail(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```

##### `resetSnsTopicName` <a name="resetSnsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName"></a>

```typescript
public resetSnsTopicName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrailName` <a name="resetTrailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName"></a>

```typescript
public resetTrailName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

cloudtrailTrail.CloudtrailTrail.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

cloudtrailTrail.CloudtrailTrail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

cloudtrailTrail.CloudtrailTrail.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

cloudtrailTrail.CloudtrailTrail.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudtrailTrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudtrailTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations">aggregationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors">eventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors">insightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput">advancedEventSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput">aggregationConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput">cloudwatchLogsLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput">enableLogFileValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput">eventSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput">includeGlobalServiceEventsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput">insightSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput">isLoggingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput">isMultiRegionTrailInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput">isOrganizationTrailInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput">snsTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput">trailNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging">isLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName">snsTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName">trailName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `advancedEventSelectors`<sup>Required</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors"></a>

```typescript
public readonly advancedEventSelectors: CloudtrailTrailAdvancedEventSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a>

---

##### `aggregationConfigurations`<sup>Required</sup> <a name="aggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations"></a>

```typescript
public readonly aggregationConfigurations: CloudtrailTrailAggregationConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `eventSelectors`<sup>Required</sup> <a name="eventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors"></a>

```typescript
public readonly eventSelectors: CloudtrailTrailEventSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insightSelectors`<sup>Required</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors"></a>

```typescript
public readonly insightSelectors: CloudtrailTrailInsightSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags"></a>

```typescript
public readonly tags: CloudtrailTrailTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a>

---

##### `advancedEventSelectorsInput`<sup>Optional</sup> <a name="advancedEventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput"></a>

```typescript
public readonly advancedEventSelectorsInput: IResolvable | CloudtrailTrailAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>[]

---

##### `aggregationConfigurationsInput`<sup>Optional</sup> <a name="aggregationConfigurationsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput"></a>

```typescript
public readonly aggregationConfigurationsInput: IResolvable | CloudtrailTrailAggregationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>[]

---

##### `cloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogsLogGroupArnInput: string;
```

- *Type:* string

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput"></a>

```typescript
public readonly cloudwatchLogsRoleArnInput: string;
```

- *Type:* string

---

##### `enableLogFileValidationInput`<sup>Optional</sup> <a name="enableLogFileValidationInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput"></a>

```typescript
public readonly enableLogFileValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventSelectorsInput`<sup>Optional</sup> <a name="eventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput"></a>

```typescript
public readonly eventSelectorsInput: IResolvable | CloudtrailTrailEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>[]

---

##### `includeGlobalServiceEventsInput`<sup>Optional</sup> <a name="includeGlobalServiceEventsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput"></a>

```typescript
public readonly includeGlobalServiceEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `insightSelectorsInput`<sup>Optional</sup> <a name="insightSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput"></a>

```typescript
public readonly insightSelectorsInput: IResolvable | CloudtrailTrailInsightSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>[]

---

##### `isLoggingInput`<sup>Optional</sup> <a name="isLoggingInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput"></a>

```typescript
public readonly isLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isMultiRegionTrailInput`<sup>Optional</sup> <a name="isMultiRegionTrailInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput"></a>

```typescript
public readonly isMultiRegionTrailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isOrganizationTrailInput`<sup>Optional</sup> <a name="isOrganizationTrailInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput"></a>

```typescript
public readonly isOrganizationTrailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `snsTopicNameInput`<sup>Optional</sup> <a name="snsTopicNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput"></a>

```typescript
public readonly snsTopicNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudtrailTrailTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>[]

---

##### `trailNameInput`<sup>Optional</sup> <a name="trailNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput"></a>

```typescript
public readonly trailNameInput: string;
```

- *Type:* string

---

##### `cloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn"></a>

```typescript
public readonly cloudwatchLogsLogGroupArn: string;
```

- *Type:* string

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn"></a>

```typescript
public readonly cloudwatchLogsRoleArn: string;
```

- *Type:* string

---

##### `enableLogFileValidation`<sup>Required</sup> <a name="enableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation"></a>

```typescript
public readonly enableLogFileValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeGlobalServiceEvents`<sup>Required</sup> <a name="includeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents"></a>

```typescript
public readonly includeGlobalServiceEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isLogging`<sup>Required</sup> <a name="isLogging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging"></a>

```typescript
public readonly isLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isMultiRegionTrail`<sup>Required</sup> <a name="isMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail"></a>

```typescript
public readonly isMultiRegionTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isOrganizationTrail`<sup>Required</sup> <a name="isOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail"></a>

```typescript
public readonly isOrganizationTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `snsTopicName`<sup>Required</sup> <a name="snsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName"></a>

```typescript
public readonly snsTopicName: string;
```

- *Type:* string

---

##### `trailName`<sup>Required</sup> <a name="trailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName"></a>

```typescript
public readonly trailName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailTrailAdvancedEventSelectors <a name="CloudtrailTrailAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailAdvancedEventSelectors: cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors">fieldSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>[]</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name">name</a></code> | <code>string</code> | An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets". |

---

##### `fieldSelectors`<sup>Optional</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors"></a>

```typescript
public readonly fieldSelectors: IResolvable | CloudtrailTrailAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>[]

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#field_selectors CloudtrailTrail#field_selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#name CloudtrailTrail#name}

---

### CloudtrailTrailAdvancedEventSelectorsFieldSelectors <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailAdvancedEventSelectorsFieldSelectors: cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith">endsWith</a></code> | <code>string[]</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo">equalTo</a></code> | <code>string[]</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field">field</a></code> | <code>string</code> | A field in an event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals">notEquals</a></code> | <code>string[]</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith">startsWith</a></code> | <code>string[]</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#ends_with CloudtrailTrail#ends_with}

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

An operator that includes events that match the exact value of the event record field specified as the value of Field.

This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#equals CloudtrailTrail#equals}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

A field in an event record on which to filter events to be logged.

Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#field CloudtrailTrail#field}

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#not_ends_with CloudtrailTrail#not_ends_with}

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#not_equals CloudtrailTrail#not_equals}

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#not_starts_with CloudtrailTrail#not_starts_with}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#starts_with CloudtrailTrail#starts_with}

---

### CloudtrailTrailAggregationConfigurations <a name="CloudtrailTrailAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailAggregationConfigurations: cloudtrailTrail.CloudtrailTrailAggregationConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory">eventCategory</a></code> | <code>string</code> | The category of events to be aggregated. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates">templates</a></code> | <code>string[]</code> | Contains all templates in an aggregation configuration. |

---

##### `eventCategory`<sup>Optional</sup> <a name="eventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory"></a>

```typescript
public readonly eventCategory: string;
```

- *Type:* string

The category of events to be aggregated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#event_category CloudtrailTrail#event_category}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates"></a>

```typescript
public readonly templates: string[];
```

- *Type:* string[]

Contains all templates in an aggregation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#templates CloudtrailTrail#templates}

---

### CloudtrailTrailConfig <a name="CloudtrailTrailConfig" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailConfig: cloudtrailTrail.CloudtrailTrailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging">isLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the CloudTrail is currently logging AWS API calls. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>[]</code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations">aggregationConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>[]</code> | Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>string</code> | Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>string</code> | Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether log file validation is enabled. The default is false. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors">eventSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>[]</code> | Use event selectors to further specify the management and data event settings for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the trail is publishing events from global services such as IAM to the log files. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors">insightSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>[]</code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the trail applies only to the current region or to all regions. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName">snsTopicName</a></code> | <code>string</code> | Specifies the name of the Amazon SNS topic defined for notification of log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName">trailName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `isLogging`<sup>Required</sup> <a name="isLogging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging"></a>

```typescript
public readonly isLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the CloudTrail is currently logging AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#is_logging CloudtrailTrail#is_logging}

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#s3_bucket_name CloudtrailTrail#s3_bucket_name}

---

##### `advancedEventSelectors`<sup>Optional</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors"></a>

```typescript
public readonly advancedEventSelectors: IResolvable | CloudtrailTrailAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>[]

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#advanced_event_selectors CloudtrailTrail#advanced_event_selectors}

---

##### `aggregationConfigurations`<sup>Optional</sup> <a name="aggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations"></a>

```typescript
public readonly aggregationConfigurations: IResolvable | CloudtrailTrailAggregationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>[]

Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#aggregation_configurations CloudtrailTrail#aggregation_configurations}

---

##### `cloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn"></a>

```typescript
public readonly cloudwatchLogsLogGroupArn: string;
```

- *Type:* string

Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.

Not required unless you specify CloudWatchLogsRoleArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}

---

##### `cloudwatchLogsRoleArn`<sup>Optional</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn"></a>

```typescript
public readonly cloudwatchLogsRoleArn: string;
```

- *Type:* string

Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="enableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation"></a>

```typescript
public readonly enableLogFileValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether log file validation is enabled. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}

---

##### `eventSelectors`<sup>Optional</sup> <a name="eventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors"></a>

```typescript
public readonly eventSelectors: IResolvable | CloudtrailTrailEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>[]

Use event selectors to further specify the management and data event settings for your trail.

By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#event_selectors CloudtrailTrail#event_selectors}

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="includeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents"></a>

```typescript
public readonly includeGlobalServiceEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the trail is publishing events from global services such as IAM to the log files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#include_global_service_events CloudtrailTrail#include_global_service_events}

---

##### `insightSelectors`<sup>Optional</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors"></a>

```typescript
public readonly insightSelectors: IResolvable | CloudtrailTrailInsightSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>[]

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#insight_selectors CloudtrailTrail#insight_selectors}

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="isMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail"></a>

```typescript
public readonly isMultiRegionTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the trail applies only to the current region or to all regions.

The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="isOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail"></a>

```typescript
public readonly isOrganizationTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.

The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#is_organization_trail CloudtrailTrail#is_organization_trail}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#kms_key_id CloudtrailTrail#kms_key_id}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.

For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#s3_key_prefix CloudtrailTrail#s3_key_prefix}

---

##### `snsTopicName`<sup>Optional</sup> <a name="snsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName"></a>

```typescript
public readonly snsTopicName: string;
```

- *Type:* string

Specifies the name of the Amazon SNS topic defined for notification of log file delivery.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#sns_topic_name CloudtrailTrail#sns_topic_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudtrailTrailTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}.

---

##### `trailName`<sup>Optional</sup> <a name="trailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName"></a>

```typescript
public readonly trailName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}.

---

### CloudtrailTrailEventSelectors <a name="CloudtrailTrailEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailEventSelectors: cloudtrailTrail.CloudtrailTrailEventSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources">dataResources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>string[]</code> | An optional list of service event sources from which you do not want management events to be logged on your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents">includeManagementEvents</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specify if you want your event selector to include management events for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType">readWriteType</a></code> | <code>string</code> | Specify if you want your trail to log read-only events, write-only events, or all. |

---

##### `dataResources`<sup>Optional</sup> <a name="dataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources"></a>

```typescript
public readonly dataResources: IResolvable | CloudtrailTrailEventSelectorsDataResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}.

---

##### `excludeManagementEventSources`<sup>Optional</sup> <a name="excludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources"></a>

```typescript
public readonly excludeManagementEventSources: string[];
```

- *Type:* string[]

An optional list of service event sources from which you do not want management events to be logged on your trail.

In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#exclude_management_event_sources CloudtrailTrail#exclude_management_event_sources}

---

##### `includeManagementEvents`<sup>Optional</sup> <a name="includeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents"></a>

```typescript
public readonly includeManagementEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specify if you want your event selector to include management events for your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#include_management_events CloudtrailTrail#include_management_events}

---

##### `readWriteType`<sup>Optional</sup> <a name="readWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType"></a>

```typescript
public readonly readWriteType: string;
```

- *Type:* string

Specify if you want your trail to log read-only events, write-only events, or all.

For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#read_write_type CloudtrailTrail#read_write_type}

---

### CloudtrailTrailEventSelectorsDataResources <a name="CloudtrailTrailEventSelectorsDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailEventSelectorsDataResources: cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type">type</a></code> | <code>string</code> | The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values">values</a></code> | <code>string[]</code> | An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#type CloudtrailTrail#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#values CloudtrailTrail#values}

---

### CloudtrailTrailInsightSelectors <a name="CloudtrailTrailInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailInsightSelectors: cloudtrailTrail.CloudtrailTrailInsightSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | The categories of events for which to log insights. By default, insights are logged for management events only. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType">insightType</a></code> | <code>string</code> | The type of insight to log on a trail. |

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

The categories of events for which to log insights. By default, insights are logged for management events only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#event_categories CloudtrailTrail#event_categories}

---

##### `insightType`<sup>Optional</sup> <a name="insightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType"></a>

```typescript
public readonly insightType: string;
```

- *Type:* string

The type of insight to log on a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#insight_type CloudtrailTrail#insight_type}

---

### CloudtrailTrailTags <a name="CloudtrailTrailTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

const cloudtrailTrailTags: cloudtrailTrail.CloudtrailTrailTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#key CloudtrailTrail#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudtrail_trail#value CloudtrailTrail#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>[]

---


### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```typescript
public resetEqualTo(): void
```

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```typescript
public resetNotEndsWith(): void
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```typescript
public resetNotEquals(): void
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```typescript
public resetNotStartsWith(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">equalToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">endsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">notEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">startsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string[];
```

- *Type:* string[]

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```typescript
public readonly equalToInput: string[];
```

- *Type:* string[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```typescript
public readonly notEndsWithInput: string[];
```

- *Type:* string[]

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```typescript
public readonly notEqualsInput: string[];
```

- *Type:* string[]

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```typescript
public readonly notStartsWithInput: string[];
```

- *Type:* string[]

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string[];
```

- *Type:* string[]

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailAdvancedEventSelectorsFieldSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>

---


### CloudtrailTrailAdvancedEventSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailTrailAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>[]

---


### CloudtrailTrailAdvancedEventSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors">putFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors">resetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelectors` <a name="putFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```typescript
public putFieldSelectors(value: IResolvable | CloudtrailTrailAdvancedEventSelectorsFieldSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `resetFieldSelectors` <a name="resetFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```typescript
public resetFieldSelectors(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors">fieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">fieldSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldSelectors`<sup>Required</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```typescript
public readonly fieldSelectors: CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `fieldSelectorsInput`<sup>Optional</sup> <a name="fieldSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```typescript
public readonly fieldSelectorsInput: IResolvable | CloudtrailTrailAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailAdvancedEventSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>

---


### CloudtrailTrailAggregationConfigurationsList <a name="CloudtrailTrailAggregationConfigurationsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get"></a>

```typescript
public get(index: number): CloudtrailTrailAggregationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailAggregationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>[]

---


### CloudtrailTrailAggregationConfigurationsOutputReference <a name="CloudtrailTrailAggregationConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory">resetEventCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates">resetTemplates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventCategory` <a name="resetEventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory"></a>

```typescript
public resetEventCategory(): void
```

##### `resetTemplates` <a name="resetTemplates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates"></a>

```typescript
public resetTemplates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput">eventCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput">templatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory">eventCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates">templates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventCategoryInput`<sup>Optional</sup> <a name="eventCategoryInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput"></a>

```typescript
public readonly eventCategoryInput: string;
```

- *Type:* string

---

##### `templatesInput`<sup>Optional</sup> <a name="templatesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput"></a>

```typescript
public readonly templatesInput: string[];
```

- *Type:* string[]

---

##### `eventCategory`<sup>Required</sup> <a name="eventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory"></a>

```typescript
public readonly eventCategory: string;
```

- *Type:* string

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates"></a>

```typescript
public readonly templates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailAggregationConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>

---


### CloudtrailTrailEventSelectorsDataResourcesList <a name="CloudtrailTrailEventSelectorsDataResourcesList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get"></a>

```typescript
public get(index: number): CloudtrailTrailEventSelectorsDataResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailEventSelectorsDataResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>[]

---


### CloudtrailTrailEventSelectorsDataResourcesOutputReference <a name="CloudtrailTrailEventSelectorsDataResourcesOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailEventSelectorsDataResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>

---


### CloudtrailTrailEventSelectorsList <a name="CloudtrailTrailEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailEventSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailTrailEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>[]

---


### CloudtrailTrailEventSelectorsOutputReference <a name="CloudtrailTrailEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources">putDataResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources">resetDataResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources">resetExcludeManagementEventSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents">resetIncludeManagementEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType">resetReadWriteType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataResources` <a name="putDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources"></a>

```typescript
public putDataResources(value: IResolvable | CloudtrailTrailEventSelectorsDataResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>[]

---

##### `resetDataResources` <a name="resetDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources"></a>

```typescript
public resetDataResources(): void
```

##### `resetExcludeManagementEventSources` <a name="resetExcludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources"></a>

```typescript
public resetExcludeManagementEventSources(): void
```

##### `resetIncludeManagementEvents` <a name="resetIncludeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents"></a>

```typescript
public resetIncludeManagementEvents(): void
```

##### `resetReadWriteType` <a name="resetReadWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType"></a>

```typescript
public resetReadWriteType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources">dataResources</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput">dataResourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput">excludeManagementEventSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput">includeManagementEventsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput">readWriteTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents">includeManagementEvents</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType">readWriteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataResources`<sup>Required</sup> <a name="dataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources"></a>

```typescript
public readonly dataResources: CloudtrailTrailEventSelectorsDataResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a>

---

##### `dataResourcesInput`<sup>Optional</sup> <a name="dataResourcesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput"></a>

```typescript
public readonly dataResourcesInput: IResolvable | CloudtrailTrailEventSelectorsDataResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>[]

---

##### `excludeManagementEventSourcesInput`<sup>Optional</sup> <a name="excludeManagementEventSourcesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput"></a>

```typescript
public readonly excludeManagementEventSourcesInput: string[];
```

- *Type:* string[]

---

##### `includeManagementEventsInput`<sup>Optional</sup> <a name="includeManagementEventsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput"></a>

```typescript
public readonly includeManagementEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readWriteTypeInput`<sup>Optional</sup> <a name="readWriteTypeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput"></a>

```typescript
public readonly readWriteTypeInput: string;
```

- *Type:* string

---

##### `excludeManagementEventSources`<sup>Required</sup> <a name="excludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources"></a>

```typescript
public readonly excludeManagementEventSources: string[];
```

- *Type:* string[]

---

##### `includeManagementEvents`<sup>Required</sup> <a name="includeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents"></a>

```typescript
public readonly includeManagementEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readWriteType`<sup>Required</sup> <a name="readWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType"></a>

```typescript
public readonly readWriteType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailEventSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>

---


### CloudtrailTrailInsightSelectorsList <a name="CloudtrailTrailInsightSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailInsightSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get"></a>

```typescript
public get(index: number): CloudtrailTrailInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailInsightSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>[]

---


### CloudtrailTrailInsightSelectorsOutputReference <a name="CloudtrailTrailInsightSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories">resetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType">resetInsightType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventCategories` <a name="resetEventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories"></a>

```typescript
public resetEventCategories(): void
```

##### `resetInsightType` <a name="resetInsightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType"></a>

```typescript
public resetInsightType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput">insightTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType">insightType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput"></a>

```typescript
public readonly eventCategoriesInput: string[];
```

- *Type:* string[]

---

##### `insightTypeInput`<sup>Optional</sup> <a name="insightTypeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput"></a>

```typescript
public readonly insightTypeInput: string;
```

- *Type:* string

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType"></a>

```typescript
public readonly insightType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailInsightSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>

---


### CloudtrailTrailTagsList <a name="CloudtrailTrailTagsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get"></a>

```typescript
public get(index: number): CloudtrailTrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>[]

---


### CloudtrailTrailTagsOutputReference <a name="CloudtrailTrailTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer"></a>

```typescript
import { cloudtrailTrail } from '@cdktn/provider-awscc'

new cloudtrailTrail.CloudtrailTrailTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailTrailTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>

---



