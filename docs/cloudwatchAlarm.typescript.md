# `cloudwatchAlarm` Submodule <a name="`cloudwatchAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarm <a name="CloudwatchAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm awscc_cloudwatch_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarm(scope: Construct, id: string, config?: CloudwatchAlarmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig">CloudwatchAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig">CloudwatchAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria">putEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow">putEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName">resetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile">resetEvaluateLowSampleCountPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria">resetEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval">resetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow">resetEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic">resetExtendedStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId">resetThresholdMetricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | CloudwatchAlarmDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>[]

---

##### `putEvaluationCriteria` <a name="putEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria"></a>

```typescript
public putEvaluationCriteria(value: CloudwatchAlarmEvaluationCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---

##### `putEvaluationWindow` <a name="putEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow"></a>

```typescript
public putEvaluationWindow(value: CloudwatchAlarmEvaluationWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---

##### `putMetrics` <a name="putMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics"></a>

```typescript
public putMetrics(value: IResolvable | CloudwatchAlarmMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchAlarmTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>[]

---

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled"></a>

```typescript
public resetActionsEnabled(): void
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions"></a>

```typescript
public resetAlarmActions(): void
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription"></a>

```typescript
public resetAlarmDescription(): void
```

##### `resetAlarmName` <a name="resetAlarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName"></a>

```typescript
public resetAlarmName(): void
```

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm"></a>

```typescript
public resetDatapointsToAlarm(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluateLowSampleCountPercentile` <a name="resetEvaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile"></a>

```typescript
public resetEvaluateLowSampleCountPercentile(): void
```

##### `resetEvaluationCriteria` <a name="resetEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria"></a>

```typescript
public resetEvaluationCriteria(): void
```

##### `resetEvaluationInterval` <a name="resetEvaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval"></a>

```typescript
public resetEvaluationInterval(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetEvaluationWindow` <a name="resetEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow"></a>

```typescript
public resetEvaluationWindow(): void
```

##### `resetExtendedStatistic` <a name="resetExtendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic"></a>

```typescript
public resetExtendedStatistic(): void
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions"></a>

```typescript
public resetInsufficientDataActions(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics"></a>

```typescript
public resetMetrics(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions"></a>

```typescript
public resetOkActions(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic"></a>

```typescript
public resetStatistic(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

##### `resetThresholdMetricId` <a name="resetThresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId"></a>

```typescript
public resetThresholdMetricId(): void
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData"></a>

```typescript
public resetTreatMissingData(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit"></a>

```typescript
public resetUnit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

cloudwatchAlarm.CloudwatchAlarm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

cloudwatchAlarm.CloudwatchAlarm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

cloudwatchAlarm.CloudwatchAlarm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria">evaluationCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput">evaluateLowSampleCountPercentileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput">evaluationCriteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput">evaluationIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput">evaluationWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput">extendedStatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput">metricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput">okActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput">thresholdMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile">evaluateLowSampleCountPercentile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval">evaluationInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic">extendedStatistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions">okActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId">thresholdMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit">unit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions"></a>

```typescript
public readonly dimensions: CloudwatchAlarmDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a>

---

##### `evaluationCriteria`<sup>Required</sup> <a name="evaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria"></a>

```typescript
public readonly evaluationCriteria: CloudwatchAlarmEvaluationCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a>

---

##### `evaluationWindow`<sup>Required</sup> <a name="evaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow"></a>

```typescript
public readonly evaluationWindow: CloudwatchAlarmEvaluationWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics"></a>

```typescript
public readonly metrics: CloudwatchAlarmMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags"></a>

```typescript
public readonly tags: CloudwatchAlarmTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a>

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput"></a>

```typescript
public readonly actionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput"></a>

```typescript
public readonly alarmActionsInput: string[];
```

- *Type:* string[]

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput"></a>

```typescript
public readonly alarmDescriptionInput: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput"></a>

```typescript
public readonly datapointsToAlarmInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | CloudwatchAlarmDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>[]

---

##### `evaluateLowSampleCountPercentileInput`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentileInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput"></a>

```typescript
public readonly evaluateLowSampleCountPercentileInput: string;
```

- *Type:* string

---

##### `evaluationCriteriaInput`<sup>Optional</sup> <a name="evaluationCriteriaInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput"></a>

```typescript
public readonly evaluationCriteriaInput: IResolvable | CloudwatchAlarmEvaluationCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---

##### `evaluationIntervalInput`<sup>Optional</sup> <a name="evaluationIntervalInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput"></a>

```typescript
public readonly evaluationIntervalInput: number;
```

- *Type:* number

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `evaluationWindowInput`<sup>Optional</sup> <a name="evaluationWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput"></a>

```typescript
public readonly evaluationWindowInput: IResolvable | CloudwatchAlarmEvaluationWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---

##### `extendedStatisticInput`<sup>Optional</sup> <a name="extendedStatisticInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput"></a>

```typescript
public readonly extendedStatisticInput: string;
```

- *Type:* string

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput"></a>

```typescript
public readonly insufficientDataActionsInput: string[];
```

- *Type:* string[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput"></a>

```typescript
public readonly metricsInput: IResolvable | CloudwatchAlarmMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput"></a>

```typescript
public readonly okActionsInput: string[];
```

- *Type:* string[]

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchAlarmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>[]

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `thresholdMetricIdInput`<sup>Optional</sup> <a name="thresholdMetricIdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput"></a>

```typescript
public readonly thresholdMetricIdInput: string;
```

- *Type:* string

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput"></a>

```typescript
public readonly treatMissingDataInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

---

##### `evaluateLowSampleCountPercentile`<sup>Required</sup> <a name="evaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile"></a>

```typescript
public readonly evaluateLowSampleCountPercentile: string;
```

- *Type:* string

---

##### `evaluationInterval`<sup>Required</sup> <a name="evaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval"></a>

```typescript
public readonly evaluationInterval: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `extendedStatistic`<sup>Required</sup> <a name="extendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic"></a>

```typescript
public readonly extendedStatistic: string;
```

- *Type:* string

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdMetricId`<sup>Required</sup> <a name="thresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId"></a>

```typescript
public readonly thresholdMetricId: string;
```

- *Type:* string

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmConfig <a name="CloudwatchAlarmConfig" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmConfig: cloudwatchAlarm.CloudwatchAlarmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName">alarmName</a></code> | <code>string</code> | The name of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The arithmetic operation to use when comparing the specified statistic and threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | The number of datapoints that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>[]</code> | The dimensions for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile">evaluateLowSampleCountPercentile</a></code> | <code>string</code> | Used only for alarms based on percentiles. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria">evaluationCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | The evaluation criteria for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval">evaluationInterval</a></code> | <code>number</code> | The frequency, in seconds, at which the alarm is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic">extendedStatistic</a></code> | <code>string</code> | The percentile statistic for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics">metrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>[]</code> | An array that enables you to create an alarm based on the result of a metric math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions">okActions</a></code> | <code>string[]</code> | The actions to execute when this alarm transitions to the ``OK`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period">period</a></code> | <code>number</code> | The period, in seconds, over which the statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic">statistic</a></code> | <code>string</code> | The statistic for the metric associated with the alarm, other than percentile. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>[]</code> | A list of key-value pairs to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold">threshold</a></code> | <code>number</code> | The value to compare with the specified statistic. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId">thresholdMetricId</a></code> | <code>string</code> | In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | Sets how this alarm is to handle missing data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit">unit</a></code> | <code>string</code> | The unit of the metric associated with the alarm. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#actions_enabled CloudwatchAlarm#actions_enabled}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#alarm_actions CloudwatchAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#alarm_description CloudwatchAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

The name of the alarm.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name. 
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#alarm_name CloudwatchAlarm#alarm_name}

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The arithmetic operation to use when comparing the specified statistic and threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#comparison_operator CloudwatchAlarm#comparison_operator}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

The number of datapoints that must be breaching to trigger the alarm.

This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for ``EvaluationPeriods`` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
 If you omit this parameter, CW uses the same value here that you set for ``EvaluationPeriods``, and the alarm goes to alarm state if that many consecutive periods are breaching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#datapoints_to_alarm CloudwatchAlarm#datapoints_to_alarm}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | CloudwatchAlarmDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>[]

The dimensions for the metric associated with the alarm.

For an alarm based on a math expression, you can't specify ``Dimensions``. Instead, you use ``Metrics``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `evaluateLowSampleCountPercentile`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile"></a>

```typescript
public readonly evaluateLowSampleCountPercentile: string;
```

- *Type:* string

Used only for alarms based on percentiles.

If ``ignore``, the alarm state does not change during periods with too few data points to be statistically significant. If ``evaluate`` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#evaluate_low_sample_count_percentile CloudwatchAlarm#evaluate_low_sample_count_percentile}

---

##### `evaluationCriteria`<sup>Optional</sup> <a name="evaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria"></a>

```typescript
public readonly evaluationCriteria: CloudwatchAlarmEvaluationCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

The evaluation criteria for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#evaluation_criteria CloudwatchAlarm#evaluation_criteria}

---

##### `evaluationInterval`<sup>Optional</sup> <a name="evaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval"></a>

```typescript
public readonly evaluationInterval: number;
```

- *Type:* number

The frequency, in seconds, at which the alarm is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#evaluation_interval CloudwatchAlarm#evaluation_interval}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

The number of periods over which data is compared to the specified threshold.

If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and ``DatapointsToAlarm`` is the M.
 For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#evaluation_periods CloudwatchAlarm#evaluation_periods}

---

##### `evaluationWindow`<sup>Optional</sup> <a name="evaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow"></a>

```typescript
public readonly evaluationWindow: CloudwatchAlarmEvaluationWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}.

---

##### `extendedStatistic`<sup>Optional</sup> <a name="extendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic"></a>

```typescript
public readonly extendedStatistic: string;
```

- *Type:* string

The percentile statistic for the metric associated with the alarm.

Specify a value between p0.0 and p100.
 For an alarm based on a metric, you must specify either ``Statistic`` or ``ExtendedStatistic`` but not both.
 For an alarm based on a math expression, you can't specify ``ExtendedStatistic``. Instead, you use ``Metrics``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#extended_statistic CloudwatchAlarm#extended_statistic}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#insufficient_data_actions CloudwatchAlarm#insufficient_data_actions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you use ``Metrics`` instead and you can't specify ``MetricName``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics"></a>

```typescript
public readonly metrics: IResolvable | CloudwatchAlarmMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>[]

An array that enables you to create an alarm based on the result of a metric math expression.

Each item in the array either retrieves a metric or performs a math expression.
 If you specify the ``Metrics`` parameter, you cannot specify ``MetricName``, ``Dimensions``, ``Period``, ``Namespace``, ``Statistic``, ``ExtendedStatistic``, or ``Unit``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#metrics CloudwatchAlarm#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify ``Namespace`` and you use ``Metrics`` instead.
 For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

The actions to execute when this alarm transitions to the ``OK`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#ok_actions CloudwatchAlarm#ok_actions}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The period, in seconds, over which the statistic is applied.

This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
 For an alarm based on a math expression, you can't specify ``Period``, and instead you use the ``Metrics`` parameter.
 *Minimum:* 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

The statistic for the metric associated with the alarm, other than percentile.

For percentile statistics, use ``ExtendedStatistic``.
 For an alarm based on a metric, you must specify either ``Statistic`` or ``ExtendedStatistic`` but not both.
 For an alarm based on a math expression, you can't specify ``Statistic``. Instead, you use ``Metrics``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#statistic CloudwatchAlarm#statistic}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchAlarmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>[]

A list of key-value pairs to associate with the alarm.

You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the ``cloudwatch:TagResource`` permission.
 Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#tags CloudwatchAlarm#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#threshold CloudwatchAlarm#threshold}

---

##### `thresholdMetricId`<sup>Optional</sup> <a name="thresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId"></a>

```typescript
public readonly thresholdMetricId: string;
```

- *Type:* string

In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#threshold_metric_id CloudwatchAlarm#threshold_metric_id}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

Sets how this alarm is to handle missing data points.

Valid values are ``breaching``, ``notBreaching``, ``ignore``, and ``missing``. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
 If you omit this parameter, the default behavior of ``missing`` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#treat_missing_data CloudwatchAlarm#treat_missing_data}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit of the metric associated with the alarm.

Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a ``Metrics`` array.
  You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

### CloudwatchAlarmDimensions <a name="CloudwatchAlarmDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmDimensions: cloudwatchAlarm.CloudwatchAlarmDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name">name</a></code> | <code>string</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value">value</a></code> | <code>string</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmEvaluationCriteria <a name="CloudwatchAlarmEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmEvaluationCriteria: cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria">promQlCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | The PromQL criteria for the alarm evaluation. |

---

##### `promQlCriteria`<sup>Optional</sup> <a name="promQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria"></a>

```typescript
public readonly promQlCriteria: CloudwatchAlarmEvaluationCriteriaPromQlCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

The PromQL criteria for the alarm evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#prom_ql_criteria CloudwatchAlarm#prom_ql_criteria}

---

### CloudwatchAlarmEvaluationCriteriaPromQlCriteria <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmEvaluationCriteriaPromQlCriteria: cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod">pendingPeriod</a></code> | <code>number</code> | The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query">query</a></code> | <code>string</code> | The PromQL query that the alarm evaluates. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod">recoveryPeriod</a></code> | <code>number</code> | The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state. |

---

##### `pendingPeriod`<sup>Optional</sup> <a name="pendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod"></a>

```typescript
public readonly pendingPeriod: number;
```

- *Type:* number

The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#pending_period CloudwatchAlarm#pending_period}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The PromQL query that the alarm evaluates.

The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#query CloudwatchAlarm#query}

---

##### `recoveryPeriod`<sup>Optional</sup> <a name="recoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod"></a>

```typescript
public readonly recoveryPeriod: number;
```

- *Type:* number

The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#recovery_period CloudwatchAlarm#recovery_period}

---

### CloudwatchAlarmEvaluationWindow <a name="CloudwatchAlarmEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmEvaluationWindow: cloudwatchAlarm.CloudwatchAlarmEvaluationWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow">slidingWindow</a></code> | <code>string</code> | Configuration for sliding evaluation window (default behavior). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow">wallClockWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | Configuration for wall clock based evaluation window. |

---

##### `slidingWindow`<sup>Optional</sup> <a name="slidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow"></a>

```typescript
public readonly slidingWindow: string;
```

- *Type:* string

Configuration for sliding evaluation window (default behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#sliding_window CloudwatchAlarm#sliding_window}

---

##### `wallClockWindow`<sup>Optional</sup> <a name="wallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow"></a>

```typescript
public readonly wallClockWindow: CloudwatchAlarmEvaluationWindowWallClockWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

Configuration for wall clock based evaluation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#wall_clock_window CloudwatchAlarm#wall_clock_window}

---

### CloudwatchAlarmEvaluationWindowWallClockWindow <a name="CloudwatchAlarmEvaluationWindowWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmEvaluationWindowWallClockWindow: cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone">timezone</a></code> | <code>string</code> | The timezone for wall clock evaluation, in IANA time zone format (e.g., America/New_York, UTC). |

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The timezone for wall clock evaluation, in IANA time zone format (e.g., America/New_York, UTC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#timezone CloudwatchAlarm#timezone}

---

### CloudwatchAlarmMetrics <a name="CloudwatchAlarmMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmMetrics: cloudwatchAlarm.CloudwatchAlarmMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId">accountId</a></code> | <code>string</code> | The ID of the account where the metrics are located, if this is a cross-account alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression">expression</a></code> | <code>string</code> | The math expression to be performed on the returned data, if this object is performing a math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id">id</a></code> | <code>string</code> | A short name used to tie this object to the results in the response. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label">label</a></code> | <code>string</code> | A human-readable label for this metric or expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat">metricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | The metric to be returned, along with statistics, period, and units. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period">period</a></code> | <code>number</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData">returnData</a></code> | <code>boolean \| cdktn.IResolvable</code> | This option indicates whether to return the timestamps and raw data values of this metric. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The ID of the account where the metrics are located, if this is a cross-account alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#account_id CloudwatchAlarm#account_id}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The math expression to be performed on the returned data, if this object is performing a math expression.

This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *User Guide*.
 Within each MetricDataQuery object, you must specify either ``Expression`` or ``MetricStat`` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#expression CloudwatchAlarm#expression}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A short name used to tie this object to the results in the response.

This name must be unique within a single call to ``GetMetricData``. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#id CloudwatchAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

A human-readable label for this metric or expression.

This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If ``Label`` is omitted, CW generates a default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#label CloudwatchAlarm#label}

---

##### `metricStat`<sup>Optional</sup> <a name="metricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat"></a>

```typescript
public readonly metricStat: CloudwatchAlarmMetricsMetricStat;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

The metric to be returned, along with statistics, period, and units.

Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
 Within one MetricDataQuery object, you must specify either ``Expression`` or ``MetricStat`` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#metric_stat CloudwatchAlarm#metric_stat}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` operation that includes a ``StorageResolution of 1 second``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `returnData`<sup>Optional</sup> <a name="returnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This option indicates whether to return the timestamps and raw data values of this metric.

When you create an alarm based on a metric math expression, specify ``True`` for this value for only the one math expression that the alarm is based on. You must specify ``False`` for ``ReturnData`` for all the other metrics and expressions used in the alarm.
 This field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#return_data CloudwatchAlarm#return_data}

---

### CloudwatchAlarmMetricsMetricStat <a name="CloudwatchAlarmMetricsMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmMetricsMetricStat: cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | The metric to return, including the metric name, namespace, and dimensions. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period">period</a></code> | <code>number</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat">stat</a></code> | <code>string</code> | The statistic to return. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit">unit</a></code> | <code>string</code> | The unit to use for the returned data points. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric"></a>

```typescript
public readonly metric: CloudwatchAlarmMetricsMetricStatMetric;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

The metric to return, including the metric name, namespace, and dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#metric CloudwatchAlarm#metric}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` call that includes a ``StorageResolution`` of 1 second.
 If the ``StartTime`` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
  +  Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
  +  Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
  +  Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

The statistic to return.

It can include any CW statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#stat CloudwatchAlarm#stat}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit to use for the returned data points.

Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

### CloudwatchAlarmMetricsMetricStatMetric <a name="CloudwatchAlarmMetricsMetricStatMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmMetricsMetricStatMetric: cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>[]</code> | The metric dimensions that you want to be used for the metric that the alarm will watch. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric that you want the alarm to watch. This is a required field. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the metric that the alarm will watch. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | CloudwatchAlarmMetricsMetricStatMetricDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>[]

The metric dimensions that you want to be used for the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric that you want the alarm to watch. This is a required field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

### CloudwatchAlarmMetricsMetricStatMetricDimensions <a name="CloudwatchAlarmMetricsMetricStatMetricDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmMetricsMetricStatMetricDimensions: cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name">name</a></code> | <code>string</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value">value</a></code> | <code>string</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmTags <a name="CloudwatchAlarmTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

const cloudwatchAlarmTags: cloudwatchAlarm.CloudwatchAlarmTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key">key</a></code> | <code>string</code> | A string that you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string that you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#key CloudwatchAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmDimensionsList <a name="CloudwatchAlarmDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get"></a>

```typescript
public get(index: number): CloudwatchAlarmDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>[]

---


### CloudwatchAlarmDimensionsOutputReference <a name="CloudwatchAlarmDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>

---


### CloudwatchAlarmEvaluationCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria">putPromQlCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria">resetPromQlCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromQlCriteria` <a name="putPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria"></a>

```typescript
public putPromQlCriteria(value: CloudwatchAlarmEvaluationCriteriaPromQlCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---

##### `resetPromQlCriteria` <a name="resetPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria"></a>

```typescript
public resetPromQlCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria">promQlCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput">promQlCriteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promQlCriteria`<sup>Required</sup> <a name="promQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria"></a>

```typescript
public readonly promQlCriteria: CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a>

---

##### `promQlCriteriaInput`<sup>Optional</sup> <a name="promQlCriteriaInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput"></a>

```typescript
public readonly promQlCriteriaInput: IResolvable | CloudwatchAlarmEvaluationCriteriaPromQlCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmEvaluationCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---


### CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod">resetPendingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod">resetRecoveryPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPendingPeriod` <a name="resetPendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod"></a>

```typescript
public resetPendingPeriod(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetRecoveryPeriod` <a name="resetRecoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod"></a>

```typescript
public resetRecoveryPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput">pendingPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput">recoveryPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod">pendingPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod">recoveryPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pendingPeriodInput`<sup>Optional</sup> <a name="pendingPeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput"></a>

```typescript
public readonly pendingPeriodInput: number;
```

- *Type:* number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `recoveryPeriodInput`<sup>Optional</sup> <a name="recoveryPeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput"></a>

```typescript
public readonly recoveryPeriodInput: number;
```

- *Type:* number

---

##### `pendingPeriod`<sup>Required</sup> <a name="pendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod"></a>

```typescript
public readonly pendingPeriod: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `recoveryPeriod`<sup>Required</sup> <a name="recoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod"></a>

```typescript
public readonly recoveryPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmEvaluationCriteriaPromQlCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---


### CloudwatchAlarmEvaluationWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow">putWallClockWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow">resetSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow">resetWallClockWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWallClockWindow` <a name="putWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow"></a>

```typescript
public putWallClockWindow(value: CloudwatchAlarmEvaluationWindowWallClockWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---

##### `resetSlidingWindow` <a name="resetSlidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow"></a>

```typescript
public resetSlidingWindow(): void
```

##### `resetWallClockWindow` <a name="resetWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow"></a>

```typescript
public resetWallClockWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow">wallClockWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput">slidingWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput">wallClockWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow">slidingWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wallClockWindow`<sup>Required</sup> <a name="wallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow"></a>

```typescript
public readonly wallClockWindow: CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a>

---

##### `slidingWindowInput`<sup>Optional</sup> <a name="slidingWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput"></a>

```typescript
public readonly slidingWindowInput: string;
```

- *Type:* string

---

##### `wallClockWindowInput`<sup>Optional</sup> <a name="wallClockWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput"></a>

```typescript
public readonly wallClockWindowInput: IResolvable | CloudwatchAlarmEvaluationWindowWallClockWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---

##### `slidingWindow`<sup>Required</sup> <a name="slidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow"></a>

```typescript
public readonly slidingWindow: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmEvaluationWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---


### CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmEvaluationWindowWallClockWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---


### CloudwatchAlarmMetricsList <a name="CloudwatchAlarmMetricsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get"></a>

```typescript
public get(index: number): CloudwatchAlarmMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>[]

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsList <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get"></a>

```typescript
public get(index: number): CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMetricsMetricStatMetricDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>[]

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMetricsMetricStatMetricDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>

---


### CloudwatchAlarmMetricsMetricStatMetricOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | CloudwatchAlarmMetricsMetricStatMetricDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: CloudwatchAlarmMetricsMetricStatMetricDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | CloudwatchAlarmMetricsMetricStatMetricDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMetricsMetricStatMetric;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---


### CloudwatchAlarmMetricsMetricStatOutputReference <a name="CloudwatchAlarmMetricsMetricStatOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat">resetStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric"></a>

```typescript
public putMetric(value: CloudwatchAlarmMetricsMetricStatMetric): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStat` <a name="resetStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat"></a>

```typescript
public resetStat(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput">metricInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput">statInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat">stat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric"></a>

```typescript
public readonly metric: CloudwatchAlarmMetricsMetricStatMetricOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | CloudwatchAlarmMetricsMetricStatMetric;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput"></a>

```typescript
public readonly statInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMetricsMetricStat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---


### CloudwatchAlarmMetricsOutputReference <a name="CloudwatchAlarmMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat">putMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat">resetMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData">resetReturnData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricStat` <a name="putMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat"></a>

```typescript
public putMetricStat(value: CloudwatchAlarmMetricsMetricStat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetMetricStat` <a name="resetMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat"></a>

```typescript
public resetMetricStat(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetReturnData` <a name="resetReturnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData"></a>

```typescript
public resetReturnData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat">metricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput">metricStatInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput">returnDataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData">returnData</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricStat`<sup>Required</sup> <a name="metricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat"></a>

```typescript
public readonly metricStat: CloudwatchAlarmMetricsMetricStatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `metricStatInput`<sup>Optional</sup> <a name="metricStatInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput"></a>

```typescript
public readonly metricStatInput: IResolvable | CloudwatchAlarmMetricsMetricStat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `returnDataInput`<sup>Optional</sup> <a name="returnDataInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput"></a>

```typescript
public readonly returnDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `returnData`<sup>Required</sup> <a name="returnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>

---


### CloudwatchAlarmTagsList <a name="CloudwatchAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get"></a>

```typescript
public get(index: number): CloudwatchAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>[]

---


### CloudwatchAlarmTagsOutputReference <a name="CloudwatchAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarm } from '@cdktn/provider-awscc'

new cloudwatchAlarm.CloudwatchAlarmTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>

---



