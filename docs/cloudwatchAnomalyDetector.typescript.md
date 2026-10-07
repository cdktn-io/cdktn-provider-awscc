# `cloudwatchAnomalyDetector` Submodule <a name="`cloudwatchAnomalyDetector` Submodule" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAnomalyDetector <a name="CloudwatchAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector awscc_cloudwatch_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetector(scope: Construct, id: string, config?: CloudwatchAnomalyDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig">CloudwatchAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig">CloudwatchAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics">putMetricCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector">putMetricMathAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector">putSingleMetricAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricCharacteristics">resetMetricCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricMathAnomalyDetector">resetMetricMathAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetSingleMetricAnomalyDetector">resetSingleMetricAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetStat">resetStat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration"></a>

```typescript
public putConfiguration(value: CloudwatchAnomalyDetectorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

---

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | CloudwatchAnomalyDetectorDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>[]

---

##### `putMetricCharacteristics` <a name="putMetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics"></a>

```typescript
public putMetricCharacteristics(value: CloudwatchAnomalyDetectorMetricCharacteristics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricCharacteristics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

---

##### `putMetricMathAnomalyDetector` <a name="putMetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector"></a>

```typescript
public putMetricMathAnomalyDetector(value: CloudwatchAnomalyDetectorMetricMathAnomalyDetector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putMetricMathAnomalyDetector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---

##### `putSingleMetricAnomalyDetector` <a name="putSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector"></a>

```typescript
public putSingleMetricAnomalyDetector(value: CloudwatchAnomalyDetectorSingleMetricAnomalyDetector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.putSingleMetricAnomalyDetector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetMetricCharacteristics` <a name="resetMetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricCharacteristics"></a>

```typescript
public resetMetricCharacteristics(): void
```

##### `resetMetricMathAnomalyDetector` <a name="resetMetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricMathAnomalyDetector"></a>

```typescript
public resetMetricMathAnomalyDetector(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSingleMetricAnomalyDetector` <a name="resetSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetSingleMetricAnomalyDetector"></a>

```typescript
public resetSingleMetricAnomalyDetector(): void
```

##### `resetStat` <a name="resetStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.resetStat"></a>

```typescript
public resetStat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.anomalyDetectorId">anomalyDetectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference">CloudwatchAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristics">metricCharacteristics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetector">metricMathAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetector">singleMetricAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristicsInput">metricCharacteristicsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetectorInput">metricMathAnomalyDetectorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetectorInput">singleMetricAnomalyDetectorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.statInput">statInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.stat">stat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anomalyDetectorId`<sup>Required</sup> <a name="anomalyDetectorId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.anomalyDetectorId"></a>

```typescript
public readonly anomalyDetectorId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configuration"></a>

```typescript
public readonly configuration: CloudwatchAnomalyDetectorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference">CloudwatchAnomalyDetectorConfigurationOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensions"></a>

```typescript
public readonly dimensions: CloudwatchAnomalyDetectorDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorDimensionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricCharacteristics`<sup>Required</sup> <a name="metricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristics"></a>

```typescript
public readonly metricCharacteristics: CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a>

---

##### `metricMathAnomalyDetector`<sup>Required</sup> <a name="metricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetector"></a>

```typescript
public readonly metricMathAnomalyDetector: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a>

---

##### `singleMetricAnomalyDetector`<sup>Required</sup> <a name="singleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetector"></a>

```typescript
public readonly singleMetricAnomalyDetector: CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | CloudwatchAnomalyDetectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | CloudwatchAnomalyDetectorDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>[]

---

##### `metricCharacteristicsInput`<sup>Optional</sup> <a name="metricCharacteristicsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricCharacteristicsInput"></a>

```typescript
public readonly metricCharacteristicsInput: IResolvable | CloudwatchAnomalyDetectorMetricCharacteristics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

---

##### `metricMathAnomalyDetectorInput`<sup>Optional</sup> <a name="metricMathAnomalyDetectorInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricMathAnomalyDetectorInput"></a>

```typescript
public readonly metricMathAnomalyDetectorInput: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `singleMetricAnomalyDetectorInput`<sup>Optional</sup> <a name="singleMetricAnomalyDetectorInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.singleMetricAnomalyDetectorInput"></a>

```typescript
public readonly singleMetricAnomalyDetectorInput: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.statInput"></a>

```typescript
public readonly statInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAnomalyDetectorConfig <a name="CloudwatchAnomalyDetectorConfig" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorConfig: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricCharacteristics">metricCharacteristics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricMathAnomalyDetector">metricMathAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.singleMetricAnomalyDetector">singleMetricAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.stat">stat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.configuration"></a>

```typescript
public readonly configuration: CloudwatchAnomalyDetectorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CloudwatchAnomalyDetector#configuration}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | CloudwatchAnomalyDetectorDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `metricCharacteristics`<sup>Optional</sup> <a name="metricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricCharacteristics"></a>

```typescript
public readonly metricCharacteristics: CloudwatchAnomalyDetectorMetricCharacteristics;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CloudwatchAnomalyDetector#metric_characteristics}.

---

##### `metricMathAnomalyDetector`<sup>Optional</sup> <a name="metricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricMathAnomalyDetector"></a>

```typescript
public readonly metricMathAnomalyDetector: CloudwatchAnomalyDetectorMetricMathAnomalyDetector;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CloudwatchAnomalyDetector#metric_math_anomaly_detector}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `singleMetricAnomalyDetector`<sup>Optional</sup> <a name="singleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.singleMetricAnomalyDetector"></a>

```typescript
public readonly singleMetricAnomalyDetector: CloudwatchAnomalyDetectorSingleMetricAnomalyDetector;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CloudwatchAnomalyDetector#single_metric_anomaly_detector}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfig.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

### CloudwatchAnomalyDetectorConfiguration <a name="CloudwatchAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorConfiguration: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.excludedTimeRanges">excludedTimeRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CloudwatchAnomalyDetector#excluded_time_ranges}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.metricTimeZone">metricTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CloudwatchAnomalyDetector#metric_time_zone}. |

---

##### `excludedTimeRanges`<sup>Optional</sup> <a name="excludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.excludedTimeRanges"></a>

```typescript
public readonly excludedTimeRanges: IResolvable | CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CloudwatchAnomalyDetector#excluded_time_ranges}.

---

##### `metricTimeZone`<sup>Optional</sup> <a name="metricTimeZone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration.property.metricTimeZone"></a>

```typescript
public readonly metricTimeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CloudwatchAnomalyDetector#metric_time_zone}.

---

### CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorConfigurationExcludedTimeRanges: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#end_time CloudwatchAnomalyDetector#end_time}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#start_time CloudwatchAnomalyDetector#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#end_time CloudwatchAnomalyDetector#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#start_time CloudwatchAnomalyDetector#start_time}.

---

### CloudwatchAnomalyDetectorDimensions <a name="CloudwatchAnomalyDetectorDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorDimensions: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

### CloudwatchAnomalyDetectorMetricCharacteristics <a name="CloudwatchAnomalyDetectorMetricCharacteristics" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorMetricCharacteristics: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.property.periodicSpikes">periodicSpikes</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CloudwatchAnomalyDetector#periodic_spikes}. |

---

##### `periodicSpikes`<sup>Optional</sup> <a name="periodicSpikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics.property.periodicSpikes"></a>

```typescript
public readonly periodicSpikes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CloudwatchAnomalyDetector#periodic_spikes}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetector <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorMetricMathAnomalyDetector: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.property.metricDataQueries">metricDataQueries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CloudwatchAnomalyDetector#metric_data_queries}. |

---

##### `metricDataQueries`<sup>Optional</sup> <a name="metricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector.property.metricDataQueries"></a>

```typescript
public readonly metricDataQueries: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CloudwatchAnomalyDetector#metric_data_queries}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#expression CloudwatchAnomalyDetector#expression}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#id CloudwatchAnomalyDetector#id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#label CloudwatchAnomalyDetector#label}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.metricStat">metricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_stat CloudwatchAnomalyDetector#metric_stat}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.returnData">returnData</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#return_data CloudwatchAnomalyDetector#return_data}. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#expression CloudwatchAnomalyDetector#expression}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#id CloudwatchAnomalyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#label CloudwatchAnomalyDetector#label}.

---

##### `metricStat`<sup>Optional</sup> <a name="metricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.metricStat"></a>

```typescript
public readonly metricStat: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_stat CloudwatchAnomalyDetector#metric_stat}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}.

---

##### `returnData`<sup>Optional</sup> <a name="returnData" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#return_data CloudwatchAnomalyDetector#return_data}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CloudwatchAnomalyDetector#metric}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.stat">stat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CloudwatchAnomalyDetector#unit}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.metric"></a>

```typescript
public readonly metric: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CloudwatchAnomalyDetector#metric}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CloudwatchAnomalyDetector#period}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CloudwatchAnomalyDetector#unit}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

### CloudwatchAnomalyDetectorSingleMetricAnomalyDetector <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorSingleMetricAnomalyDetector: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.stat">stat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CloudwatchAnomalyDetector#account_id}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CloudwatchAnomalyDetector#dimensions}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CloudwatchAnomalyDetector#metric_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CloudwatchAnomalyDetector#namespace}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CloudwatchAnomalyDetector#stat}.

---

### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

const cloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions: cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CloudwatchAnomalyDetector#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CloudwatchAnomalyDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get"></a>

```typescript
public get(index: number): CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>[]

---


### CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference <a name="CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>

---


### CloudwatchAnomalyDetectorConfigurationOutputReference <a name="CloudwatchAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges">putExcludedTimeRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetExcludedTimeRanges">resetExcludedTimeRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetMetricTimeZone">resetMetricTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludedTimeRanges` <a name="putExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges"></a>

```typescript
public putExcludedTimeRanges(value: IResolvable | CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.putExcludedTimeRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>[]

---

##### `resetExcludedTimeRanges` <a name="resetExcludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetExcludedTimeRanges"></a>

```typescript
public resetExcludedTimeRanges(): void
```

##### `resetMetricTimeZone` <a name="resetMetricTimeZone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.resetMetricTimeZone"></a>

```typescript
public resetMetricTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges">excludedTimeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRangesInput">excludedTimeRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZoneInput">metricTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone">metricTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedTimeRanges`<sup>Required</sup> <a name="excludedTimeRanges" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges"></a>

```typescript
public readonly excludedTimeRanges: CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">CloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a>

---

##### `excludedTimeRangesInput`<sup>Optional</sup> <a name="excludedTimeRangesInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRangesInput"></a>

```typescript
public readonly excludedTimeRangesInput: IResolvable | CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">CloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>[]

---

##### `metricTimeZoneInput`<sup>Optional</sup> <a name="metricTimeZoneInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZoneInput"></a>

```typescript
public readonly metricTimeZoneInput: string;
```

- *Type:* string

---

##### `metricTimeZone`<sup>Required</sup> <a name="metricTimeZone" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone"></a>

```typescript
public readonly metricTimeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorConfiguration">CloudwatchAnomalyDetectorConfiguration</a>

---


### CloudwatchAnomalyDetectorDimensionsList <a name="CloudwatchAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get"></a>

```typescript
public get(index: number): CloudwatchAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>[]

---


### CloudwatchAnomalyDetectorDimensionsOutputReference <a name="CloudwatchAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorDimensions">CloudwatchAnomalyDetectorDimensions</a>

---


### CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference <a name="CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resetPeriodicSpikes">resetPeriodicSpikes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriodicSpikes` <a name="resetPeriodicSpikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resetPeriodicSpikes"></a>

```typescript
public resetPeriodicSpikes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikesInput">periodicSpikesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes">periodicSpikes</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodicSpikesInput`<sup>Optional</sup> <a name="periodicSpikesInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikesInput"></a>

```typescript
public readonly periodicSpikesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `periodicSpikes`<sup>Required</sup> <a name="periodicSpikes" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes"></a>

```typescript
public readonly periodicSpikes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricCharacteristics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricCharacteristics">CloudwatchAnomalyDetectorMetricCharacteristics</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get"></a>

```typescript
public get(index: number): CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>[]

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```typescript
public get(index: number): CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>[]

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetStat">resetStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric"></a>

```typescript
public putMetric(value: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetStat` <a name="resetStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetStat"></a>

```typescript
public resetStat(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metricInput">metricInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.statInput">statInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```typescript
public readonly metric: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.statInput"></a>

```typescript
public readonly statInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat">putMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetMetricStat">resetMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetReturnData">resetReturnData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricStat` <a name="putMetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat"></a>

```typescript
public putMetricStat(value: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.putMetricStat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetMetricStat` <a name="resetMetricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetMetricStat"></a>

```typescript
public resetMetricStat(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetReturnData` <a name="resetReturnData" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resetReturnData"></a>

```typescript
public resetReturnData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat">metricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStatInput">metricStatInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnDataInput">returnDataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData">returnData</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricStat`<sup>Required</sup> <a name="metricStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat"></a>

```typescript
public readonly metricStat: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `metricStatInput`<sup>Optional</sup> <a name="metricStatInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStatInput"></a>

```typescript
public readonly metricStatInput: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `returnDataInput`<sup>Optional</sup> <a name="returnDataInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnDataInput"></a>

```typescript
public readonly returnDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `returnData`<sup>Required</sup> <a name="returnData" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>

---


### CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference <a name="CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries">putMetricDataQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resetMetricDataQueries">resetMetricDataQueries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDataQueries` <a name="putMetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries"></a>

```typescript
public putMetricDataQueries(value: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.putMetricDataQueries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>[]

---

##### `resetMetricDataQueries` <a name="resetMetricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resetMetricDataQueries"></a>

```typescript
public resetMetricDataQueries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries">metricDataQueries</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueriesInput">metricDataQueriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDataQueries`<sup>Required</sup> <a name="metricDataQueries" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries"></a>

```typescript
public readonly metricDataQueries: CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a>

---

##### `metricDataQueriesInput`<sup>Optional</sup> <a name="metricDataQueriesInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueriesInput"></a>

```typescript
public readonly metricDataQueriesInput: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">CloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorMetricMathAnomalyDetector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorMetricMathAnomalyDetector">CloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get"></a>

```typescript
public get(index: number): CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>[]

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>

---


### CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference <a name="CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer"></a>

```typescript
import { cloudwatchAnomalyDetector } from '@cdktn/provider-awscc'

new cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetStat">resetStat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetStat` <a name="resetStat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resetStat"></a>

```typescript
public resetStat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.statInput">statInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat">stat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.statInput"></a>

```typescript
public readonly statInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAnomalyDetectorSingleMetricAnomalyDetector;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAnomalyDetector.CloudwatchAnomalyDetectorSingleMetricAnomalyDetector">CloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---



